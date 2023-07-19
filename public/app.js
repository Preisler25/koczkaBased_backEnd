let quotationTime = () => {
  let url = genRandom();
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Hiba a válaszban: ' + response.status);
      }
      return response.json(); // Itt a .json() metódus már feldolgozza a JSON adatot
    })
    .then(data => {
      // data már JavaScript objektum lesz
      genPopUp(data.today);
    })
    .catch(error => {
      console.error('Hiba a kérés során:', error);
    });
}

let genRandom = () =>{
    let random = Math.floor(Math.random()*11);
    return `https://koczkabased.lol/quotation?d=${random}`
    //return `https://koczkabased.lol/quotation?d=${random}`
}

let delPopUp = () =>{
  let e = document.getElementById('popUp');
  e.innerHTML = '';
  e.classList.remove('active_pop_up');
}

let genPopUp = (txt) =>{
  let e = document.getElementById('popUp')
  e.innerHTML = `<div id="cont">
  <img id="x_btn" onclick="delPopUp()" src="https://www.freeiconspng.com/thumbs/close-button-png/black-circle-close-button-png-5.png" alt="">
  <img id="koczka_kep" src="https://media.discordapp.net/attachments/1110164952590856243/1112638199022501910/Screenshot_from_2023-05-29_09-02-25-removebg-preview.png?width=420&height=468" alt="">
  <div class="popUp_grid_item">
      <div id="popUp_title">Tanulj ma is Koczkátol!</div>
      <div id="popUp_quot">"${txt}"</div>
  </div>
</div>`;
  e.classList.add('active_pop_up');
}

