(function(){
const RES_MAP={resFire:'fire',resCold:'cold',resLightning:'lightning',resChaos:'chaos'};
const num=v=>Number.isFinite(Number(v))?Number(v):0;
const allAffixes=i=>[...(i.implicits||[]),...(i.prefixes||[]),...(i.suffixes||[])];

function ringMultiplier(item,data){
  if(!item.ingenuitySide)return 1;
  const belt=data.gear.belt||{};
  const pct=item.ingenuitySide==='left'?num(belt.ringBonusLeftPct):num(belt.ringBonusRightPct);
  return 1+pct/100;
}
function scaledAffixValue(a,item,data){
  if(a.active===false)return 0;
  let v=num(a.value);
  if(a.ingenuity){
    v*=ringMultiplier(item,data);
    if(data.rules.ingenuityRounding==='floor-per-mod')v=Math.floor(v+1e-9);
  }
  return v;
}
function sumGearStat(data,stat){
  let total=0;
  Object.values(data.gear).forEach(item=>allAffixes(item).forEach(a=>{if(a.stat===stat)total+=scaledAffixValue(a,item,data);}));
  return total;
}
function qualityMultiplier(item,data){return 1+num(item.quality)*num(data.rules.qualityLocalDefenceMorePerPct)/100;}
function calcItemDefence(item,data,tree){
  if(!item)return{evasion:0,energyShield:0};
  if(item.transformed){
    const lvl=num(tree.baseCharacter.level);
    const q=qualityMultiplier(item,data);
    return{evasion:Math.floor(num(item.transformed.evasionPerLevel)*lvl*q+1e-9),energyShield:Math.floor(num(item.transformed.energyShieldPerLevel)*lvl*q+1e-9)};
  }
  const baseE=num(item.baseStats?.evasion),baseES=num(item.baseStats?.energyShield);
  let localPct=0,flatES=0,flatEvasion=0;
  allAffixes(item).forEach(a=>{if(a.active===false)return;if(a.stat==='localEvasionESPct')localPct+=num(a.value);if(a.stat==='localFlatES')flatES+=num(a.value);if(a.stat==='localFlatEvasion')flatEvasion+=num(a.value);});
  const q=qualityMultiplier(item,data);
  return{evasion:Math.floor((baseE+flatEvasion)*(1+localPct/100)*q+1e-9),energyShield:Math.floor((baseES+flatES)*(1+localPct/100)*q+1e-9)};
}
function calcAttributes(data,tree){
  const b=tree.baseCharacter,u=tree.unconditional,alloc=tree.attributeAllocation.defaultNodes,p=tree.attributeAllocation.pointsPerNode,c=data.campaignFixed.attributes;
  return{
    strength:Math.floor(num(b.strength)+num(u.strength)+num(alloc.strength)*num(p)+num(c.strength)+sumGearStat(data,'strength')),
    dexterity:Math.floor(num(b.dexterity)+num(u.dexterity)+num(alloc.dexterity)*num(p)+num(c.dexterity)+sumGearStat(data,'dexterity')),
    intelligence:Math.floor(num(b.intelligence)+num(u.intelligence)+num(alloc.intelligence)*num(p)+num(c.intelligence)+sumGearStat(data,'intelligence')),
    allocation:{...alloc,total:num(alloc.strength)+num(alloc.dexterity)+num(alloc.intelligence),required:num(tree.attributeAllocation.flexibleNodes)}
  };
}
function calcLifeMana(data,tree,attrs){
  const b=tree.baseCharacter,c=data.campaignFixed;
  const lifeBase=num(b.baseLifeAtLevel1)+num(b.lifePerLevel)*num(b.level)+2*num(attrs.strength)+num(c.flatLife)+sumGearStat(data,'maxLife');
  const manaBase=num(b.baseManaAtLevel1)+num(b.manaPerLevel)*num(b.level)+2*num(attrs.intelligence)+sumGearStat(data,'maxMana');
  const life=Math.floor(lifeBase*(1+num(c.maxLifePct)/100)+1e-9);
  const mana=Math.floor(manaBase*(1+num(c.maxManaPct)/100)+1e-9);
  const baseRegen=mana*num(b.baseManaRegenPctPerSecond)/100;
  const permanentInc=num(tree.unconditional.manaRegenIncreasedPct)+num(c.manaRegenPct)+sumGearStat(data,'manaRegenPct');
  const clarityInc=50;
  const shockInc=num(tree.conditional.manaRegenIfShockedRecentlyPct);
  return{life,mana,lifeBase,manaBase,manaRegen:baseRegen*(1+permanentInc/100),manaRegenWithClarity:baseRegen*(1+(permanentInc+clarityInc)/100),manaRegenWithClarityAndShock:baseRegen*(1+(permanentInc+clarityInc+shockInc)/100),permanentRegenInc:permanentInc};
}
function calcDefences(data,tree){
  const c=data.campaignFixed;
  const pieces=['helmet','chest','boots','gloves'],item={};
  let itemEvasion=0,itemES=0;
  pieces.forEach(k=>{item[k]=calcItemDefence(data.gear[k],data,tree);itemEvasion+=item[k].evasion;itemES+=item[k].energyShield;});
  const bodyItemEvasion=item.chest.evasion;
  const spectralWard=Math.floor(bodyItemEvasion/Math.max(1,num(tree.special.spectralWardBodyItemEvasionPerEnergyShield)));
  const globalFlatES=sumGearStat(data,'maxES')+spectralWard;
  const incES=num(tree.unconditional.energyShieldIncreasedPct)+num(c.kaomDefencesPct);
  const incEvasion=num(tree.unconditional.evasionIncreasedPct)+num(c.kaomDefencesPct);
  const baseEvasion=itemEvasion+7;
  const energyShield=Math.floor((itemES+globalFlatES)*(1+incES/100)+1e-9);
  const evasion=Math.floor(baseEvasion*(1+incEvasion/100)+1e-9);
  const evasionNotHit=Math.floor(baseEvasion*(1+(incEvasion+num(tree.conditional.evasionIfNotHitRecentlyPct))/100)+1e-9);
  const deflection=Math.floor(evasion*num(tree.unconditional.deflectionFromEvasionPct)/100+1e-9);
  const deflectionNotHit=Math.floor(evasionNotHit*num(tree.unconditional.deflectionFromEvasionPct)/100+1e-9);
  return{item,itemEvasion,itemES,baseEvasion,spectralWard,globalFlatES,incES,incEvasion,energyShield,evasion,deflection,evasionNotHit,deflectionNotHit};
}
function calcResistances(data,tree){
  const c=data.campaignFixed.resistances;
  const raw={fire:num(tree.unconditional.resFire)+num(c.fire),cold:num(tree.unconditional.resCold)+num(c.cold),lightning:num(tree.unconditional.resLightning)+num(c.lightning),chaos:num(tree.unconditional.resChaos)+num(c.chaos)};
  Object.values(data.gear).forEach(item=>allAffixes(item).forEach(a=>{const k=RES_MAP[a.stat];if(k)raw[k]+=scaledAffixValue(a,item,data);}));
  const afterPenalty={fire:raw.fire+num(data.rules.endgameElementalPenalty),cold:raw.cold+num(data.rules.endgameElementalPenalty),lightning:raw.lightning+num(data.rules.endgameElementalPenalty),chaos:raw.chaos+num(data.rules.endgameChaosPenalty)};
  const capped={};Object.keys(afterPenalty).forEach(k=>capped[k]=Math.min(num(data.rules.resistanceCap),afterPenalty[k]));
  return{raw,afterPenalty,capped};
}
function calcCrit(data,tree){
  const w=data.gear.weapon.weaponStats;
  const gearInc=sumGearStat(data,'critChancePct'),treeInc=num(tree.unconditional.critChanceIncreasedPct);
  const permanent=num(w.baseCritPct)*(1+(treeInc+gearInc)/100);
  const vsDazed=num(w.baseCritPct)*(1+(treeInc+gearInc+num(tree.conditional.critChanceVsDazedIncreasedPct))/100);
  const cdbPermanent=num(tree.baseCharacter.baseCriticalDamageBonusPct)+num(tree.unconditional.critDamageBonusIncreasedPct)+num(w.criticalDamageBonusFlatPct)+sumGearStat(data,'critDamageBonusFlatPct');
  const cdbPowerRecent=cdbPermanent+num(tree.conditional.critDamageIfPowerChargeConsumedRecentlyIncreasedPct);
  return{weaponBasePct:num(w.baseCritPct),gearIncreasedPct:gearInc,treeIncreasedPct:treeInc,permanent,vsDazed,cdbPermanent,cdbPowerRecent};
}
function calcAttackSpeed(data,tree){
  const w=data.gear.weapon.weaponStats;
  const weaponAPS=num(w.baseAPS)*(1+num(w.localAttackSpeedPct)/100);
  const gearPct=sumGearStat(data,'attackSpeedPct')+num(data.gear.gloves.transformed?.attackSpeedPct);
  const treeAttackPct=num(tree.unconditional.attackSpeedIncreasedPct);
  const skillSpeedPct=num(tree.unconditional.skillSpeedIncreasedPct);
  const applicableTreePct=treeAttackPct+skillSpeedPct;
  const finalAPS=weaponAPS*(1+(applicableTreePct+gearPct)/100);
  return{weaponAPS,treeAttackPct,skillSpeedPct,applicableTreePct,gearPct,finalAPS};
}
function calcMovement(data,tree){
  let gearPct=sumGearStat(data,'moveSpeedPct');
  Object.values(data.gear).forEach(item=>gearPct+=num(item.baseMovementSpeedPct));
  const permanentPct=gearPct+num(tree.unconditional.movementSpeedIncreasedPct);
  return{gearPct,treePct:num(tree.unconditional.movementSpeedIncreasedPct),permanentPct,whileEnergyShieldPct:permanentPct+num(tree.conditional.movementSpeedWhileEnergyShieldPct)};
}
function calcSpirit(data){
  const gear=sumGearStat(data,'spirit'),base=num(data.campaignFixed.spirit),total=base+gear;
  const reserved=data.skills.filter(s=>s.active!==false).reduce((sum,s)=>sum+num(s.spiritReservation),0);
  return{base,gear,total,reserved,free:total-reserved};
}
function calcAll(data,tree){
  const attributes=calcAttributes(data,tree),lifeMana=calcLifeMana(data,tree,attributes),defences=calcDefences(data,tree),resistances=calcResistances(data,tree),crit=calcCrit(data,tree),attackSpeed=calcAttackSpeed(data,tree),movement=calcMovement(data,tree),spirit=calcSpirit(data);
  return{attributes,lifeMana,defences,resistances,crit,attackSpeed,movement,spirit,runicWard:num(data.gear.weapon.weaponStats.runicWard)};
}
window.HD_CALC={allAffixes,ringMultiplier,scaledAffixValue,sumGearStat,calcItemDefence,calcAttributes,calcLifeMana,calcDefences,calcResistances,calcCrit,calcAttackSpeed,calcMovement,calcSpirit,calcAll};
})();