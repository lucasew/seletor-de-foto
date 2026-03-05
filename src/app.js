/* global alert */
import { reportError } from './error-reporter.js'

window.addEventListener('drop', drop)
window.addEventListener('dragover', allowDrop)

let images = []
let selected

function updateImageContainer () {
  console.log(selected)
  const imageContainer = document.getElementById('list')
  const swapElement = document.createElement('div')
  images.forEach((img, i) => {
    const imgElem = document.createElement('img')
    imgElem.src = img
    imgElem.alt = 'imagem selecionada'
    imgElem.className = 'foto'
    if (selected === i) {
      imgElem.className += ' selected'
    }
    swapElement.appendChild(imgElem)
  })
  imageContainer.innerHTML = swapElement.innerHTML
}

function randomizeImageList () {
  if (images.length === 0) {
    alert('Erro: nenhuma imagem para sortear')
    return
  }
  if (images.length === 1) {
    alert('Tá de brinqueixon uite mi né?')
    return
  }
  fetch(`https://www.random.org/integers/?num=1&min=0&max=${images.length - 1}&col=1&base=10&format=plain&rnd=new`)
    .then((result) => {
      result.text().then((number) => {
        const num = parseInt(number)
        if (isNaN(num)) {
          alert(`O serviço random.org retornou um valor inválido: '${number}'`)
        } else {
          mudarNumeroSorteado(num)
        }
      })
    })
    .catch(function (err) {
      reportError(err, { source: 'random.org fetch' })
      alert(`O serviço random.org retornou um erro, ou só nunca nem viu: '${err.message || err}'`)
      mudarNumeroSorteado(Math.floor(Math.random() * images.length))
    })
}

function mudarNumeroSorteado (numero) {
  selected = numero
  updateImageContainer()
  alert('Sorteado!')
}

function allowDrop (ev) {
  ev.preventDefault()
}

function ingestFiles (files) {
  const newItems = []
  const promises = []
  for (let i = 0; i < files.length; i++) {
    if (!files[i]) return
    newItems.push(window.URL.createObjectURL(files[i]))
  }
  Promise.all(promises).then((items) => {
    images = [...images, ...newItems]
  }).finally(updateImageContainer)
  console.log(images)
}

function drop (ev) {
  ev.preventDefault()
  console.log(ev)
  ingestFiles(ev.dataTransfer.files)
}

window.addEventListener('load', () => {
  const list = document.getElementById('list')
  list.addEventListener('click', (e) => {
    e.preventDefault()
    document.getElementById('fileElem').click()
  })

  const fileElem = document.getElementById('fileElem')
  fileElem.addEventListener('change', function () {
    ingestFiles(this.files)
  })

  const titulo = document.getElementById('titulo')
  titulo.addEventListener('click', randomizeImageList)

  console.log('loaded')
})
