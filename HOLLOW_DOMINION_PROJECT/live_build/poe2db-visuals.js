(function(){
'use strict';
const data=window.HOLLOW_DOMINION_DATA;
if(!data)return;

const gearVisuals={
 helmet:{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Armours/Helmets/Basetypes/HelmetDexInt06.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Armours/Helmets/Basetypes/HelmetDexInt06.png'
 ],page:'https://poe2db.tw/fr/Grinning_Mask'},
 gloves:{sources:[
  'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVW5pcXVlcy9Mb2NodG9uaWFsQ2FyZXNzIiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/3136a23eaa/LochtonialCaress.png'
 ],page:'https://poe2db.tw/fr/Lochtonial_Caress'},
 weapon:{sources:[
  'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9XYXJTdGF2ZXMvVW5pcXVlcy9TdGpvcnZhciIsInciOjIsImgiOjQsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/7c25a683fd/Stjorvar.png'
 ],page:'https://poe2db.tw/fr/Duality'},
 chest:{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Armours/BodyArmours/Basetypes/BodyDexInt02.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Armours/BodyArmours/Basetypes/BodyDexInt02.png'
 ],page:'https://poe2db.tw/fr/Sleek_Jacket'},
 belt:{sources:[
  'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVW5pcXVlcy9XaWRvd21ha2VyIiwidyI6MiwiaCI6MSwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/394f71de07/Widowmaker.png'
 ],page:'https://poe2db.tw/fr/Ingenuity'},
 boots:{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Armours/Boots/Basetypes/BootsDexInt04.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Armours/Boots/Basetypes/BootsDexInt04.png'
 ],page:'https://poe2db.tw/fr/Daggerfoot_Shoes'},
 amulet:{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Amulets/Basetypes/SolarAmulet.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Amulets/Basetypes/SolarAmulet.png'
 ],page:'https://poe2db.tw/fr/Solar_Amulet'},
 ringAmethyst:{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/AmethystRing.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/AmethystRing.png',
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/FourRing6.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/FourRing6.png'
 ],page:'https://poe2db.tw/fr/Amethyst_Ring'},
 ringTopaz:{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/TopazRing.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/TopazRing.png',
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/FourRing5.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/FourRing5.png'
 ],page:'https://poe2db.tw/fr/Topaz_Ring'}
};

const skillVisuals={
 'Hollow Form → Whirling Assault':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/HollowFormSkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/HollowFormSkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/martialartistmantraofillusionsskill.webp'
 ],page:'https://poe2db.tw/us/Hollow_Form'},
 'Shattering Palm':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ShatteringPalmSkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ShatteringPalmSkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/monkshatteringpalm.webp'
 ],page:'https://poe2db.tw/us/Shattering_Palm'},
 'Freezing Mark':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/FreezingMarkSkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/FreezingMarkSkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/freezingmarkskill.webp'
 ],page:'https://poe2db.tw/us/Freezing_Mark'},
 'Charged Staff':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ChargedStaffSkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ChargedStaffSkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/monkchargedstaff.webp'
 ],page:'https://poe2db.tw/us/Charged_Staff'},
 'Tempest Bell':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/TempestBellSkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/TempestBellSkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/monktempestbell.webp'
 ],page:'https://poe2db.tw/us/Tempest_Bell'},
 'Hollow Resonance':{sources:[
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/martialartistcarryspectralbellskill.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/SpiritGem.webp'
 ],page:'https://poe2db.tw/Hollow_Resonance'},
 'Hollow Focus':{sources:[
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/martialartistspectralbellskill.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/SpiritGem.webp'
 ],page:'https://poe2db.tw/Hollow_Focus'},
 'Charge Regulation':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ChargeMasterySkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ChargeMasterySkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/chargemasterydeath.webp'
 ],page:'https://poe2db.tw/us/Charge_Regulation'},
 'Danseur du vent':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/WindDancerSkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/WindDancerSkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/rangerwinddancerskill.webp'
 ],page:'https://poe2db.tw/us/Wind_Dancer'},
 'Elemental Conflux':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ElementalConfluxSkillGem.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/ElementalConfluxSkillGem.png',
  'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/elementalconfluxskill.webp'
 ],page:'https://poe2db.tw/us/Elemental_Conflux'}
};

const supportIcon=f=>`https://cdn.poe2db.tw/image/art/2dart/skillicons/support/4k/${f}.webp`;
const supportIconPng=f=>`https://cdn.poe2db.tw/image/art/2dart/skillicons/support/4k/${f}.png`;
const supportVisuals={
 'Heavy Swing':{sources:[supportIcon('meleephysicaldamagesupport'),supportIconPng('meleephysicaldamagesupport')],page:'https://poe2db.tw/us/Heavy_Swing'},
 'Heightened Charges':{sources:[supportIcon('potencysupport'),supportIconPng('potencysupport')],page:'https://poe2db.tw/us/Heightened_Charges'},
 'Blindside':{sources:[supportIcon('blindsidesupport'),supportIconPng('blindsidesupport')],page:'https://poe2db.tw/us/Blindside'},
 "Vorana's Siege":{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/VoranasSiege.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/VoranasSiege.png'
 ],page:'https://poe2db.tw/Voranas_Siege'},
 'Rapid Attacks II':{sources:[supportIcon('fasterattack'),supportIconPng('fasterattack')],page:'https://poe2db.tw/us/Rapid_Attacks_II'},
 'Magnified Area II':{sources:[supportIcon('increasedareaofeffectsupport'),supportIconPng('increasedareaofeffectsupport')],page:'https://poe2db.tw/us/Magnified_Area_II'},
 'Elemental Armament II':{sources:[supportIcon('weaponelementaldamagesupport'),supportIconPng('weaponelementaldamagesupport')],page:'https://poe2db.tw/us/Elemental_Armament_II'},
 'Rising Tempest':{sources:[supportIcon('tempesttemposupport'),supportIconPng('tempesttemposupport')],page:'https://poe2db.tw/us/Rising_Tempest'},
 'Ice Bite II':{sources:[supportIcon('icebitesupport'),supportIconPng('icebitesupport')],page:'https://poe2db.tw/us/Ice_Bite_II'},
 'Ancestral Call II':{sources:[supportIcon('ancestralcallsupport'),supportIconPng('ancestralcallsupport')],page:'https://poe2db.tw/us/Ancestral_Call_II'},
 'Eternal Mark':{sources:[supportIcon('undeterred'),supportIconPng('undeterred')],page:'https://poe2db.tw/us/Eternal_Mark'},
 'Prolonged Duration II':{sources:[supportIcon('moredurationsupport'),supportIconPng('moredurationsupport')],page:'https://poe2db.tw/us/Prolonged_Duration_II'},
 'Charged Mark':{sources:[supportIcon('chargedmark'),supportIconPng('chargedmark')],page:'https://poe2db.tw/us/Charged_Mark'},
 'Mark for Death II':{sources:[supportIcon('singleoutsupport'),supportIconPng('singleoutsupport')],page:'https://poe2db.tw/us/Mark_for_Death_II'},
 'Blind II':{sources:[supportIcon('blindsupport'),supportIconPng('blindsupport')],page:'https://poe2db.tw/us/Blind_II'},
 'Perpetual Charge':{sources:[supportIcon('perpetualchargesupport'),supportIconPng('perpetualchargesupport')],page:'https://poe2db.tw/us/Perpetual_Charge'},
 'Innervate':{sources:[supportIcon('innervate'),supportIconPng('innervate')],page:'https://poe2db.tw/us/Innervate'},
 'Close Combat II':{sources:[supportIcon('closecombatsupport'),supportIconPng('closecombatsupport')],page:'https://poe2db.tw/us/Close_Combat_II'},
 'Overabundance II':{sources:[supportIcon('increaselimitsupport'),supportIconPng('increaselimitsupport')],page:'https://poe2db.tw/us/Overabundance_II'},
 'Rage III':{sources:[supportIcon('ragesupport'),supportIconPng('ragesupport')],page:'https://poe2db.tw/us/Rage_III'},
 'Stun III':{sources:[supportIcon('overpowersupport'),supportIconPng('overpowersupport')],page:'https://poe2db.tw/us/Stun_III'},
 'Cooldown Recovery II':{sources:[supportIcon('cooldownreductionsupport'),supportIconPng('cooldownreductionsupport')],page:'https://poe2db.tw/Cooldown_Recovery_II'},
 'Pinpoint Critical':{sources:[supportIcon('pinpointcriticalsupport'),supportIconPng('pinpointcriticalsupport')],page:'https://poe2db.tw/us/Pinpoint_Critical'},
 'Heft':{sources:[supportIcon('heftsupport'),supportIconPng('heftsupport')],page:'https://poe2db.tw/fr/Heft'},
 'Clarity II':{sources:[supportIcon('claritysupport'),supportIconPng('claritysupport')],page:'https://poe2db.tw/us/Clarity_II'},
 'Precision II':{sources:[supportIcon('precisionsupport'),supportIconPng('precisionsupport')],page:'https://poe2db.tw/us/Precision_II'},
 'Maim':{sources:[supportIcon('maimsupport'),supportIconPng('maimsupport')],page:'https://poe2db.tw/us/Maim'},
 'Rage II':{sources:[supportIcon('ragesupport'),supportIconPng('ragesupport')],page:'https://poe2db.tw/us/Rage_II'},
 'Her Declaration':{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/MothersDeclaration.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/MothersDeclaration.png'
 ],page:'https://poe2db.tw/us/Her_Declaration'},
 "Seraph's Heart":{sources:[
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/SeraphsHeart.webp',
  'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/SeraphsHeart.png'
 ],page:'https://poe2db.tw/Seraphs_Heart'},
 'Elemental Focus II':{sources:[supportIcon('elementalfocussupport'),supportIconPng('elementalfocussupport')],page:'https://poe2db.tw/us/Elemental_Focus'}
};
function splitOptional(raw){const p=String(raw||'').split(' — ');return{name:p[0],note:p.slice(1).join(' — ')}}
function installFallbacks(img,sources,onFail){
 const list=(sources||[]).filter(Boolean);
 if(!list.length){if(onFail)onFail();return;}
 let i=0;
 img.src=list[0];
 img.onerror=()=>{i+=1;if(i<list.length){img.src=list[i];}else{img.classList.add('visualLoadFailed');img.onerror=null;if(onFail)onFail();}};
}
function linkImage(asset,cls,alt,onFail){
 const a=document.createElement('a');a.href=asset.page;a.target='_blank';a.rel='noopener noreferrer';a.title=`PoE2DB — ${alt}`;
 const img=document.createElement('img');img.className=cls;img.alt=alt;img.loading='lazy';img.referrerPolicy='no-referrer';img.decoding='async';
 installFallbacks(img,asset.sources||[asset.src],onFail);
 a.appendChild(img);return a
}
function supportRow(raw){const x=splitOptional(raw),asset=supportVisuals[x.name],li=document.createElement('li');li.className='supportVisualLine';if(asset)li.appendChild(linkImage(asset,'supportVisualIcon',x.name));else{const ph=document.createElement('span');ph.textContent='';li.appendChild(ph)}const t=document.createElement('span'),n=document.createElement('span');n.className='supportName';n.textContent=x.name;t.appendChild(n);if(x.note){const note=document.createElement('small');note.className='supportNote';note.textContent=x.note;t.appendChild(note)}li.appendChild(t);return li}
function enhanceGear(){const root=document.getElementById('gear');if(!root)return;const keys=Object.keys(data.gear||{}),cards=[...root.children];cards.forEach((card,i)=>{const asset=gearVisuals[keys[i]],item=data.gear[keys[i]];if(!asset||!item)return;const current=card.querySelector('.itemVisual');if(current){const original=current.getAttribute('src');current.alt=item.name;current.loading='lazy';current.referrerPolicy='no-referrer';current.decoding='async';current.dataset.poe2db='1';current.title=`PoE2DB — ${item.name}`;const sources=[...(asset.sources||[asset.src])];if(original&&!sources.includes(original))sources.push(original);installFallbacks(current,sources);}})}
function enhanceSkills(){const root=document.getElementById('skills');if(!root)return;const cards=[...root.children];cards.forEach((card,i)=>{const s=data.skills?.[i];if(!s)return;const asset=skillVisuals[s.name];const existing=card.firstElementChild;if(asset&&existing&&!existing.classList.contains('poe2db-skill-anchor')){const fallbackNode=existing.cloneNode(true);const a=linkImage(asset,'poe2db-skill-visual',s.name,()=>{if(a.isConnected)a.replaceWith(fallbackNode)});a.classList.add('poe2db-skill-anchor');card.replaceChild(a,existing)}const ol=card.querySelector('.skillText > ol');if(ol&&!ol.classList.contains('supportList')){ol.className='supportList';ol.replaceChildren(...(s.supports||[]).map(supportRow))}const opt=card.querySelector('.optionalSupports');if(opt&&s.optionalSupports?.length&&!opt.querySelector('.optionalList')){opt.textContent='';const label=document.createElement('b');label.textContent='Facultatif :';const list=document.createElement('ul');list.className='supportList optionalList';list.append(...s.optionalSupports.map(supportRow));opt.append(label,list)}})}
let queued=false;function enhance(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;enhanceGear();enhanceSkills()})}
const gear=document.getElementById('gear'),skills=document.getElementById('skills');if(gear)new MutationObserver(enhance).observe(gear,{childList:true});if(skills)new MutationObserver(enhance).observe(skills,{childList:true});enhance();
})();
