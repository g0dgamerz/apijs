const late=document.getElementById('latitude');
const long=document.getElementById('longitude');
getb().catch(err => console.err(err));
// geta();
// function geta() {fetch('https://api.wheretheiss.at/v1/satellites/25544').then(response =>{
//     console.log(response);
//     return response;
// }).then(data =>{
//     const  jsondata = data.json();
//     return jsondata;
// }).then(jsondata =>{
//     console.log(jsondata);
//     console.table(jsondata);
//     console.log(jsondata.latitude)
//     console.log(jsondata.longitude)
//     late.innerHTML = jsondata.latitude;
//     long.innerHTML = jsondata.longitude;           
// }).catch(error => console.error(error));
// }

// geta();
// async function geta(){
//  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
//  console.log(response);
//  const jsondata = await response.json();
//  console.log(jsondata);
//  ({latitude,longitude}=jsondata);
//  console.log(latitude,longitude);
//  late.innerHTML=latitude;
//  long.innerHTML=longitude; 
// }

async function getb(){
const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
console.log(response);
const jsondata = await response.json();
console.log(jsondata);
({latitude,longitude}=jsondata);
console.log(latitude,longitude);
late.innerHTML=latitude;
long.innerHTML=longitude; 
}
setInterval(getb,5000);

