let localCompanies=[];

const searchBox=document.getElementById("searchBox");
const resultsDiv=document.getElementById("results");
const resultCount=document.getElementById("resultCount");
const toast=document.getElementById("toast");

/* LOAD LOCAL DATA */
async function loadLocalData(){
const res=await fetch("data.json");
localCompanies=await res.json();
}
loadLocalData();

/* TOAST */
function showToast(msg){
toast.textContent=msg;
toast.style.opacity=1;
setTimeout(()=>toast.style.opacity=0,2000);
}

/* LIVE COMPANY SEARCH */
async function fetchLiveCompanies(query){
try{
const res=await fetch(
`https://autocomplete.clearbit.com/v1/companies/suggest?query=${query}`
);
return await res.json();
}catch{
return [];
}
}

/* SEARCH */
searchBox.addEventListener("input",async()=>{

const query=searchBox.value.trim().toLowerCase();
resultsDiv.innerHTML="";

if(!query){
resultCount.textContent="";
return;
}

const localMatches=localCompanies.filter(c =>
c.company.toLowerCase().includes(query)
);

const liveMatches=await fetchLiveCompanies(query);

resultCount.textContent=
`${localMatches.length+liveMatches.length} results`;

/* LOCAL RESULTS */
localMatches.forEach(c=>{
resultsDiv.appendChild(createLocalCard(c));
});

/* LIVE RESULTS */
liveMatches.slice(0,6).forEach(c=>{
resultsDiv.appendChild(createLiveCard(c));
});

});

/* LOCAL CARD */
function createLocalCard(c){

const card=document.createElement("div");
card.className="card";

card.innerHTML=`
<div class="card-header">

<div class="header-left">
${c.company}
<span class="badge">✔ Verified Hiring Contact</span>
</div>

<span class="arrow">⌄</span>
</div>

<div class="card-content">
<p><b>Contact:</b> ${c.contact}</p>

<p>
<b>Email:</b>
<span class="email"
onclick="copyEmail(event,'${c.email}')">
${c.email}
</span>
</p>

<p>
<a href="${c.careers}" target="_blank">
Careers Page
</a>
</p>

<small>Public hiring contact</small>
</div>
`;

card.addEventListener("click",()=>card.classList.toggle("open"));

return card;
}
/* LIVE CARD WITH SAFE LOGO */
function createLiveCard(c){

const logoURL = c.logo
? c.logo
: `https://logo.clearbit.com/${c.domain}`;

const card=document.createElement("div");
card.className="card open";

card.innerHTML=`
<div class="card-header">
<div class="header-left">
<img
src="${logoURL}"
class="company-logo"
onerror="this.onerror=null;this.src='https://via.placeholder.com/28?text=🏢';">
${c.name}
</div>
</div>

<div class="card-content" style="max-height:200px;padding-bottom:18px;">
<p>${c.domain}</p>

<a href="https://${c.domain}" target="_blank">
Visit Company Website
</a>

<br>
<small>Live company lookup</small>
</div>
`;

return card;
}

/* COPY EMAIL */
function copyEmail(event,email){
event.stopPropagation();
navigator.clipboard.writeText(email);
showToast("Email copied");
}