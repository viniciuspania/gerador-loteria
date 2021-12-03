var retornaDados = document.getElementById('return')

const getNum = (min, max) => {
  let num = Math.random() * (max - min) + min
  return Math.floor(num)
}

const megaSena = () => {
  let arr = [];
  let contador = 6;
  for (let i = 1; i <= contador; i++) {
    let newNumber = getNum(1, 60);
    if (arr.includes(newNumber)) {
      contador++
    } else {
      arr.push(newNumber)
    }
  }
  return retornaDados.innerHTML = `
  <h3>Anote seus números :) </h3>
  <br/>
  <p>${arr.sort(function (a, b) { return a - b }).join(" - ")}</p>
  `
}

const lotoFacil = () => {
  let arr = [];
  let contador = 15;
  for (let i = 1; i <= contador; i++) {
    let newNumber = getNum(1, 25)
    if (arr.includes(newNumber)) {
      contador++;
    } else {
      arr.push(newNumber)
    }
  }
  return retornaDados.innerHTML = `
  <h3>Anote seus números :) </h3>
  <br/>
  <p>${arr.sort(function (a, b) { return a - b }).join(" - ")}</p>
  `
}

const lotomania = () => {
  let arr = [];
  let contador = 50;
  for (let i = 1; i <= contador; i++) {
    let newNumber = getNum(1, 99)
    if (arr.includes(newNumber)) {
      contador++;
    } else {
      arr.push(newNumber)
    }
  }
  return retornaDados.innerHTML = `
  <h3>Anote seus números :) </h3>
  <br/>
  <p>${arr.sort(function (a, b) { return a - b }).join(" - ")}</p>
  `
}


