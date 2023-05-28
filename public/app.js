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
      // Itt kezelheted a kapott adatokat
      console.log(data);
      alert(data)
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
    return `http://localhost:8000/quotation?d=${random}`
}

let genPopUp = () =>{
  let element = document.createElement('div')
  element.classList.add("popUp")
  
}