(function(){
'use strict';
const data=window.HOLLOW_DOMINION_DATA;
if(!data)return;
const gearVisuals={
 helmet:{src:'https://cdn.poe2db.tw/image/Art/2DItems/Armours/Helmets/Basetypes/HelmetDexInt06.webp',page:'https://poe2db.tw/fr/Grinning_Mask'},
 gloves:{src:'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQXJtb3Vycy9HbG92ZXMvVW5pcXVlcy9Mb2NodG9uaWFsQ2FyZXNzIiwidyI6MiwiaCI6Miwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/3136a23eaa/LochtonialCaress.png',page:'https://poe2db.tw/fr/Lochtonial_Caress'},
 weapon:{src:'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvV2VhcG9ucy9Ud29IYW5kV2VhcG9ucy9XYXJTdGF2ZXMvVW5pcXVlcy9TdGpvcnZhciIsInciOjIsImgiOjQsInNjYWxlIjoxLCJyZWFsbSI6InBvZTIifV0/7c25a683fd/Stjorvar.png',page:'https://poe2db.tw/fr/Duality'},
 chest:{src:'https://cdn.poe2db.tw/image/Art/2DItems/Armours/BodyArmours/Basetypes/BodyDexInt02.webp',page:'https://poe2db.tw/fr/Sleek_Jacket'},
 belt:{src:'https://web.poecdn.com/gen/image/WzI1LDE0LHsiZiI6IjJESXRlbXMvQmVsdHMvVW5pcXVlcy9XaWRvd21ha2VyIiwidyI6MiwiaCI6MSwic2NhbGUiOjEsInJlYWxtIjoicG9lMiJ9XQ/394f71de07/Widowmaker.png',page:'https://poe2db.tw/fr/Ingenuity'},
 boots:{src:'https://cdn.poe2db.tw/image/Art/2DItems/Armours/Boots/Basetypes/BootsDexInt04.webp',page:'https://poe2db.tw/fr/Daggerfoot_Shoes'},
 amulet:{src:'https://cdn.poe2db.tw/image/Art/2DItems/Amulets/Basetypes/SolarAmulet.webp',page:'https://poe2db.tw/fr/Solar_Amulet'},
 ringAmethyst:{src:'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/AmethystRing.webp',page:'https://poe2db.tw/fr/Amethyst_Ring'},
 ringTopaz:{src:'https://cdn.poe2db.tw/image/Art/2DItems/Rings/Basetypes/TopazRing.webp',page:'https://poe2db.tw/fr/Topaz_Ring'}
};
const skillVisuals={
 'Hollow Form → Whirling Assault':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/martialartistmantraofillusionsskill.webp',page:'https://poe2db.tw/us/Hollow_Form'},
 'Shattering Palm':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/monkshatteringpalm.webp',page:'https://poe2db.tw/us/Shattering_Palm'},
 'Freezing Mark':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/freezingmarkskill.webp',page:'https://poe2db.tw/us/Freezing_Mark'},
 'Charged Staff':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/monkchargedstaff.webp',page:'https://poe2db.tw/us/Charged_Staff'},
 'Tempest Bell':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/monktempestbell.webp',page:'https://poe2db.tw/us/Tempest_Bell'},
 'Hollow Resonance':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/martialartistcarryspectralbellskill.webp',page:'https://poe2db.tw/Hollow_Resonance'},
 'Hollow Focus':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/martialartistspectralbellskill.webp',page:'https://poe2db.tw/Hollow_Focus'},
 'Charge Regulation':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/chargemasterydeath.webp',page:'https://poe2db.tw/us/Charge_Regulation'},
 'Danseur du vent':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/rangerwinddancerskill.webp',page:'https://poe2db.tw/us/Wind_Dancer'},
 'Elemental Conflux':{src:'https://cdn.poe2db.tw/image/art/2dart/skillicons/4k/elementalconfluxskill.webp',page:'https://poe2db.tw/us/Elemental_Conflux'}
};
const supportIcon=f=>`https://cdn.poe2db.tw/image/art/2dart/skillicons/support/4k/${f}.webp`;
const supportVisuals={
 'Heavy Swing':{src:supportIcon('meleephysicaldamagesupport'),page:'https://poe2db.tw/us/Heavy_Swing'},
 'Heightened Charges':{src:supportIcon('potencysupport'),page:'https://poe2db.tw/us/Heightened_Charges'},
 'Blindside':{src:supportIcon('blindsidesupport'),page:'https://poe2db.tw/us/Blindside'},
 "Vorana's Siege":{src:'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/VoranasSiege.webp',page:'https://poe2db.tw/Voranas_Siege'},
 'Rapid Attacks II':{src:supportIcon('fasterattack'),page:'https://poe2db.tw/us/Rapid_Attacks_II'},
 'Magnified Area II':{src:supportIcon('increasedareaofeffectsupport'),page:'https://poe2db.tw/us/Magnified_Area_II'},
 'Elemental Armament II':{src:supportIcon('weaponelementaldamagesupport'),page:'https://poe2db.tw/us/Elemental_Armament_II'},
 'Rising Tempest':{src:supportIcon('tempesttemposupport'),page:'https://poe2db.tw/us/Rising_Tempest'},
 'Ice Bite II':{src:supportIcon('icebitesupport'),page:'https://poe2db.tw/us/Ice_Bite_II'},
 'Ancestral Call II':{src:supportIcon('ancestralcallsupport'),page:'https://poe2db.tw/us/Ancestral_Call_II'},
 'Eternal Mark':{src:supportIcon('undeterred'),page:'https://poe2db.tw/us/Eternal_Mark'},
 'Prolonged Duration II':{src:supportIcon('moredurationsupport'),page:'https://poe2db.tw/us/Prolonged_Duration_II'},
 'Charged Mark':{src:supportIcon('chargedmark'),page:'https://poe2db.tw/us/Charged_Mark'},
 'Mark for Death II':{src:supportIcon('singleoutsupport'),page:'https://poe2db.tw/us/Mark_for_Death_II'},
 'Blind II':{src:supportIcon('blindsupport'),page:'https://poe2db.tw/us/Blind_II'},
 'Perpetual Charge':{src:supportIcon('perpetualchargesupport'),page:'https://poe2db.tw/us/Perpetual_Charge'},
 'Innervate':{src:supportIcon('innervate'),page:'https://poe2db.tw/us/Innervate'},
 'Close Combat II':{src:supportIcon('closecombatsupport'),page:'https://poe2db.tw/us/Close_Combat_II'},
 'Overabundance II':{src:supportIcon('increaselimitsupport'),page:'https://poe2db.tw/us/Overabundance_II'},
 'Rage III':{src:supportIcon('ragesupport'),page:'https://poe2db.tw/us/Rage_III'},
 'Stun III':{src:supportIcon('overpowersupport'),page:'https://poe2db.tw/us/Stun_III'},
 'Cooldown Recovery II':{src:supportIcon('cooldownreductionsupport'),page:'https://poe2db.tw/Cooldown_Recovery_II'},
 'Pinpoint Critical':{src:supportIcon('pinpointcriticalsupport'),page:'https://poe2db.tw/us/Pinpoint_Critical'},
 'Heft':{src:supportIcon('heftsupport'),page:'https://poe2db.tw/fr/Heft'},
 'Clarity II':{src:supportIcon('claritysupport'),page:'https://poe2db.tw/us/Clarity_II'},
 'Precision II':{src:supportIcon('precisionsupport'),page:'https://poe2db.tw/us/Precision_II'},
 'Maim':{src:supportIcon('maimsupport'),page:'https://poe2db.tw/us/Maim'},
 'Rage II':{src:supportIcon('ragesupport'),page:'https://poe2db.tw/us/Rage_II'},
 'Her Declaration':{src:'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/MothersDeclaration.webp',page:'https://poe2db.tw/us/Her_Declaration'},
 "Seraph's Heart":{src:'https://cdn.poe2db.tw/image/Art/2DItems/Gems/New/NewSupport/Lineage/SeraphsHeart.webp',page:'https://poe2db.tw/Seraphs_Heart'},
 /* Current PoE2DB exposes Elemental Focus (no II). Keep the build label untouched; visual is the current family icon. */
 'Elemental Focus II':{src:supportIcon('elementalfocussupport'),page:'https://poe2db.tw/us/Elemental_Focus'}
};
function splitOptional(raw){const p=String(raw||'').split(' — ');return{name:p[0],note:p.slice(1).join(' — ')}}
function linkImage(asset,cls,alt){const a=document.createElement('a');a.href=asset.page;a.target='_blank';a.rel='noopener noreferrer';a.title=`PoE2DB — ${alt}`;const img=document.createElement('img');img.className=cls;img.src=asset.src;img.alt=alt;img.loading='lazy';img.referrerPolicy='no-referrer';a.appendChild(img);return a}
function supportRow(raw){const x=splitOptional(raw),asset=supportVisuals[x.name],li=document.createElement('li');li.className='supportVisualLine';if(asset)li.appendChild(linkImage(asset,'supportVisualIcon',x.name));else{const ph=document.createElement('span');ph.textContent='';li.appendChild(ph)}const t=document.createElement('span'),n=document.createElement('span');n.className='supportName';n.textContent=x.name;t.appendChild(n);if(x.note){const note=document.createElement('small');note.className='supportNote';note.textContent=x.note;t.appendChild(note)}li.appendChild(t);return li}
function enhanceGear(){const root=document.getElementById('gear');if(!root)return;const keys=Object.keys(data.gear||{}),cards=[...root.children];cards.forEach((card,i)=>{const asset=gearVisuals[keys[i]],item=data.gear[keys[i]];if(!asset||!item)return;const current=card.querySelector('.itemVisual');if(current){current.src=asset.src;current.alt=item.name;current.loading='lazy';current.referrerPolicy='no-referrer';current.dataset.poe2db='1';current.title=`PoE2DB — ${item.name}`}})}
function enhanceSkills(){const root=document.getElementById('skills');if(!root)return;const cards=[...root.children];cards.forEach((card,i)=>{const s=data.skills?.[i];if(!s)return;const asset=skillVisuals[s.name];const existing=card.firstElementChild;if(asset&&existing&&!existing.classList.contains('poe2db-skill-visual')){const a=linkImage(asset,'poe2db-skill-visual',s.name);card.replaceChild(a,existing)}const ol=card.querySelector('.skillText > ol');if(ol&&!ol.classList.contains('supportList')){ol.className='supportList';ol.replaceChildren(...(s.supports||[]).map(supportRow))}const opt=card.querySelector('.optionalSupports');if(opt&&s.optionalSupports?.length&&!opt.querySelector('.optionalList')){opt.textContent='';const label=document.createElement('b');label.textContent='Facultatif :';const list=document.createElement('ul');list.className='supportList optionalList';list.append(...s.optionalSupports.map(supportRow));opt.append(label,list)}})}
let queued=false;function enhance(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;enhanceGear();enhanceSkills()})}
const gear=document.getElementById('gear'),skills=document.getElementById('skills');if(gear)new MutationObserver(enhance).observe(gear,{childList:true});if(skills)new MutationObserver(enhance).observe(skills,{childList:true});enhance();
})();
