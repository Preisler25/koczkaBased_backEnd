let quotationTime = () => {
    let url = genRandom();
    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Hiba a válaszban: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      let json_txt = JSON.parse(data)
      // Itt kezelheted a kapott adatokat
      genPopUp(json_txt.today)
      // Például:
      // processResponse(data);
    })
    .catch(error => {
      // Itt kezeled az esetleges hibákat
      console.error('Hiba a kérés során:', error);
    });
}

let genRandom = () =>{
    let random = Math.floor(Math.random()*10);
    return `https://koczkabased.lol//quotation?d=${random}`
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

