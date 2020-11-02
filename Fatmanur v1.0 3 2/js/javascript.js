var knop = document.querySelector('.knoppie');
console.log("werkt");
//  met document.queryselector roep ik de class .knoppie aan, dat is me img op regel 15 van mijn HTML document

var trans = document.querySelector('span');
console.log("werkt");
//  met document.queryselector roep ik de enige span aan die in mijn HTML staat, dat is op regel 23


function toggleTrans() {
  trans.classList.toggle('open');
}
console.log("werkt");
// als ik op .knoppie druk dan geeft ik mijn span (of te wel var trans, van transform) de class open mee
// hiermee veranderd de visibility van mijn span van hidden naar visible


knop.addEventListener('click', toggleTrans); 
console.log("werkt");
// eventlistener die er voor zorgt dat alsik op var knop (.knoppie in html) klik mijn span de class open krijgt en zo opent

trans.addEventListener('click', toggleTrans); 
console.log("werkt");
// eventlistener die er voor zorgt dat alsik op var trans (span in html) klik mijn span de class span krijgt en weer sluit


//https://codepen.io/rouws/pen/yLLYJgp code van sonja rouwhorst gekregen bij uitleg vorig jaar, codepen ROUWS is beschikbaar voor iedereen