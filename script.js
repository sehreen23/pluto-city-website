const services=[
['Commercial Office Leasing','Grade-A office sourcing, shortlisting, and lease structuring across prime corridors.'],
['Corporate Real Estate Advisory','Occupier strategy, portfolio planning, and workplace decision support.'],
['Residential Sales & Leasing','Curated homes for buyers, tenants, and property owners across Bengaluru.'],
['Luxury Residential Advisory','Premium apartments, villas, and gated-community opportunities.'],
['Industrial & Warehouse Leasing','Logistics, warehousing, and industrial space identification and negotiation.'],
['Real Estate Investment Advisory','Opportunity evaluation, yield analysis, and entry–exit strategy.'],
['Property & Asset Management','Coordinated management services that protect and grow asset value.'],
['Property Maintenance','Partner-supported facilities and maintenance coordination for smooth operations.'],
['Corporate Relocation','Office moves, space optimization, and consolidation strategies.'],
['Lease Negotiation & Transaction Support','Commercial terms, documentation coordination, and closure support.'],
['Tenant & Landlord Representation','Dedicated representation for occupiers and property owners alike.'],
['Property Acquisition & Sales','Buy-side and sell-side advisory for commercial and investment assets.']
];
const list=document.getElementById('service-list');
services.forEach(([title,description],i)=>{const card=document.createElement('article');card.className='service-item';const num=document.createElement('span');num.className='service-number';num.textContent=String(i+1).padStart(2,'0');const h=document.createElement('h3');h.textContent=title;const p=document.createElement('p');p.textContent=description;card.append(num,h,p);list.append(card)});
document.getElementById('year').textContent=new Date().getFullYear();
const header=document.getElementById('header');const toggle=document.querySelector('.menu-toggle');const nav=document.getElementById('main-nav');
function updateHeader(){header.classList.toggle('scrolled',window.scrollY>35)}
window.addEventListener('scroll',updateHeader,{passive:true});updateHeader();
toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');header.classList.toggle('menu-open',opened);toggle.setAttribute('aria-expanded',String(opened))});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');header.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')}));
