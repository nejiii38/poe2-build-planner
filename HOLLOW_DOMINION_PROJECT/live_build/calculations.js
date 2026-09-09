(function(){
const MAP={resFire:'fire',resCold:'cold',resLightning:'lightning',resChaos:'chaos'};
const INT_STATS=new Set(['strength','dexterity','intelligence','maxLife','maxMana','maxES','spirit','localFlatES','flatEvasion']);
const allAffixes=i=>[...(i.implicits||[]),...(i.prefixes||[]),...(i.suffixes||[])];

function ringMultiplier(item,data){
  if(!item.ingenuitySide)return 1;
  const p=item.ingenuitySide==='left'?data.rules.ingenuityLeftRingBonusPct:data.rules.ingenuityRightRingBonusPct;
  return 1+Number(p||0)/100;
}
function scaledAffixValue(a,item,data){
  let v=Number(a.value||0);
  if(a.ingenuity)v*=ringMultiplier(item,data);
  if(INT_STATS.has(a.stat))v=Math.floor(v+1e-9);
  return v;
}
function sumGearStat(data,stat){
  let total=0;
  Object.values(data.gear).forEach(item=>{
    allAffixes(item).forEach(a=>{if(a.stat===stat)total+=scaledAffixValue(a,item,data);});
  });
  return total;
}
function calcAttributes(data,tree){
  const b=tree.baseCharacter,u=tree.unconditional,alloc=tree.attributeAllocation.defaultNodes,p=tree.attributeAllocation.pointsPerNode;
  const strength=b.strength+u.strength+alloc.strength*p+sumGearStat(data,'strength');
  const dexterity=b.dexterity+u.dexterity+alloc.dexterity*p+sumGearStat(data,'dexterity');
  const intelligence=b.intelligence+u.intelligence+alloc.intelligence*p+sumGearStat(data,'intelligence');
  return{strength:Math.floor(strength),dexterity:Math.floor(dexterity),intelligence:Math.floor(intelligence),allocation:{...alloc,total:alloc.strength+alloc.dexterity+alloc.intelligence,required:tree.attributeAllocation.flexibleNodes}};
}
function calcItemDefence(item,tree){
  if(item.transformed){
    const lvl=tree.baseCharacter.level;
    return{evasion:Number(item.transformed.evasionPerLevel||0)*lvl,energyShield:Number(item.transformed.energyShieldPerLevel||0)*lvl};
  }
  const baseE=Number(item.baseStats?.evasion||0),baseES=Number(item.baseStats?.energyShield||0);
  const localPct=allAffixes(item).filter(a=>a.stat==='localEvasionESPct').reduce((s,a)=>s+Number(a.value||0),0);
  const localFlatES=allAffixes(item).filter(a=>a.stat==='localFlatES').reduce((s,a)=>s+Number(a.value||0),0);
  const localFlatEvasion=allAffixes(item).filter(a=>a.stat==='localFlatEvasion').reduce((s,a)=>s+Number(a.value||0),0);
  return{evasion:(baseE+localFlatEvasion)*(1+localPct/100),energyShield:(baseES+localFlatES)*(1+localPct/100)};
}
function calcDefences(data,tree){
  const pieces=['helmet','chest','boots','gloves'],item={};
  let itemEvasion=0,itemES=0;
  pieces.forEach(k=>{item[k]=calcItemDefence(data.gear[k],tree);itemEvasion+=item[k].evasion;itemES+=item[k].energyShield;});
  const jewelleryES=sumGearStat(data,'maxES');
  const bodyItemEvasion=item.chest.evasion;
  const spectralWard=Math.floor(bodyItemEvasion/Number(tree.special.spectralWardBodyItemEvasionPerEnergyShield||12));
  const baseES=itemES+jewelleryES+spectralWard;
  const energyShield=Math.floor(baseES*(1+tree.unconditional.energyShieldIncreasedPct/100));
  const evasion=Math.floor(itemEvasion*(1+tree.unconditional.evasionIncreasedPct/100));
  const evasionNotHit=Math.floor(itemEvasion*(1+(tree.unconditional.evasionIncreasedPct+tree.conditional.evasionIfNotHitRecentlyPct)/100));
  const deflection=Math.floor(evasion*tree.unconditional.deflectionFromEvasionPct/100);
  const deflectionNotHit=Math.floor(evasionNotHit*tree.unconditional.deflectionFromEvasionPct/100);
  return{item,itemEvasion,itemES,jewelleryES,spectralWard,energyShield,evasion,deflection,evasionNotHit,deflectionNotHit};
}
function calcLifeMana(data,tree,attrs){
  const b=tree.baseCharacter;
  const baseLife=b.baseLifeAtLevel1+b.lifePerLevel*b.level;
  const baseMana=b.baseManaAtLevel1+b.manaPerLevel*b.level;
  const life=Math.floor(baseLife+attrs.strength*b.lifePerStrength+sumGearStat(data,'maxLife'));
  const mana=Math.floor(baseMana+attrs.intelligence*b.manaPerIntelligence+sumGearStat(data,'maxMana'));
  const regenInc=tree.unconditional.manaRegenIncreasedPct+sumGearStat(data,'manaRegenPct');
  const manaRegen=mana*(b.baseManaRegenPctPerSecond/100)*(1+regenInc/100);
  const manaRegenShocked=mana*(b.baseManaRegenPctPerSecond/100)*(1+(regenInc+tree.conditional.manaRegenIfShockedRecentlyPct)/100);
  return{life,mana,manaRegen,manaRegenShocked,baseLife,baseMana};
}
function calcResistances(data,tree){
  const raw={fire:tree.unconditional.resFire+(data.rules.campaignElementalBonus.fire||0),cold:tree.unconditional.resCold+(data.rules.campaignElementalBonus.cold||0),lightning:tree.unconditional.resLightning+(data.rules.campaignElementalBonus.lightning||0),chaos:tree.unconditional.resChaos+(data.rules.campaignElementalBonus.chaos||0)};
  Object.values(data.gear).forEach(item=>allAffixes(item).forEach(a=>{const k=MAP[a.stat];if(k)raw[k]+=scaledAffixValue(a,item,data);}));
  const afterPenalty={fire:raw.fire+data.rules.endgameElementalPenalty,cold:raw.cold+data.rules.endgameElementalPenalty,lightning:raw.lightning+data.rules.endgameElementalPenalty,chaos:raw.chaos+data.rules.endgameChaosPenalty};
  const capped={};Object.keys(afterPenalty).forEach(k=>capped[k]=Math.min(data.rules.resistanceCap,afterPenalty[k]));
  return{raw,afterPenalty,capped};
}
function calcCrit(data,tree){
  const w=data.gear.weapon.weaponStats,gearInc=sumGearStat(data,'critChancePct'),treeInc=tree.unconditional.critChanceIncreasedPct;
  const permanent=Number(w.baseCritPct||0)*(1+(treeInc+gearInc)/100);
  const vsDazed=Number(w.baseCritPct||0)*(1+(treeInc+gearInc+tree.conditional.critChanceVsDazedIncreasedPct)/100);
  const flatCDB=tree.baseCharacter.baseCriticalDamageBonusPct+Number(w.criticalDamageBonusFlatPct||0)+sumGearStat(data,'critDamageBonusFlatPct');
  const cdbPermanent=flatCDB*(1+tree.unconditional.critDamageBonusIncreasedPct/100);
  const cdbPowerRecent=flatCDB*(1+(tree.unconditional.critDamageBonusIncreasedPct+tree.conditional.critDamageIfPowerChargeConsumedRecentlyIncreasedPct)/100);
  return{weaponBasePct:w.baseCritPct,gearIncreasedPct:gearInc,treeIncreasedPct:treeInc,permanent,vsDazed,flatCDB,cdbPermanent,cdbPowerRecent};
}
function calcAttackSpeed(data,tree){
  const w=data.gear.weapon.weaponStats;
  const weaponAPS=Number(w.baseAPS||0)*(1+Number(w.localAttackSpeedPct||0)/100);
  const gearPct=sumGearStat(data,'attackSpeedPct')+Number(data.gear.gloves.transformed?.attackSpeedPct||0);
  const finalAPS=weaponAPS*(1+(tree.unconditional.attackSpeedIncreasedPct+gearPct)/100);
  return{weaponAPS,treePct:tree.unconditional.attackSpeedIncreasedPct,gearPct,finalAPS,skillSpeedPct:tree.unconditional.skillSpeedIncreasedPct};
}
function calcMovement(data,tree){
  const gearPct=sumGearStat(data,'moveSpeedPct'),permanentPct=gearPct+tree.unconditional.movementSpeedIncreasedPct;
  return{gearPct,treePct:tree.unconditional.movementSpeedIncreasedPct,permanentPct,whileEnergyShieldPct:permanentPct+tree.conditional.movementSpeedWhileEnergyShieldPct};
}
function calcSpirit(data,tree){
  const gear=sumGearStat(data,'spirit'),total=tree.baseCharacter.baseSpirit+gear;
  return{base:tree.baseCharacter.baseSpirit,gear,total};
}
function calcAll(data,tree){
  const attributes=calcAttributes(data,tree),defences=calcDefences(data,tree),lifeMana=calcLifeMana(data,tree,attributes);
  return{attributes,defences,lifeMana,resistances:calcResistances(data,tree),crit:calcCrit(data,tree),attackSpeed:calcAttackSpeed(data,tree),movement:calcMovement(data,tree),spirit:calcSpirit(data,tree)};
}
window.HD_CALC={allAffixes,ringMultiplier,scaledAffixValue,sumGearStat,calcAttributes,calcDefences,calcLifeMana,calcResistances,calcCrit,calcAttackSpeed,calcMovement,calcSpirit,calcAll};
})();