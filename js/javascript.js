var knop = document.querySelector('header>nav>div>img');
console.log(knop);
//  met document.queryselector roep ik de class .knoppie aan, dat is me img op regel 15 van mijn HTML document

var trans = document.querySelector('header nav div:nth-of-type(2)');
console.log(trans);
//  met document.queryselector roep ik de enige span aan die in mijn HTML staat, dat is op regel 23


function toggleTrans() {
  trans.classList.toggle('open');
  console.log("werkt");
}
// als ik op .knoppie druk dan geeft ik mijn span (of te wel var trans, van transform) de class open mee
// hiermee veranderd de visibility van mijn span van hidden naar visible


knop.addEventListener('click', toggleTrans);
console.log(knop);
// eventlistener die er voor zorgt dat alsik op var knop (.knoppie in html) klik mijn span de class open krijgt en zo opent

trans.addEventListener('click', toggleTrans);
// eventlistener die er voor zorgt dat alsik op var trans (span in html) klik mijn span de class span krijgt en weer sluit
