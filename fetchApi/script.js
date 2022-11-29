let container = document.querySelector('.container');
console.log(container)

const fetchQuotes=()=>{
  fetch('https://api.themotivate365.com/stoic-quote')
  .then(res=>res.json())
  .then((quotes)=>{
    container.innerHTML = `
     <p class="quotes">
    <q>
      ${quotes.quote}</q>
  </p>
  <p id="author">${quotes.author}</p>
    `
  })
  .catch(err=>console.log(err))
}


window.onload=fetchQuotes();

setInterval(fetchQuotes, 15000);