import { observer } from './UserInterface'

class View {
  constructor(idElement) {
    this._date = []
    this._idInDOM = document.querySelector(idElement)
  }

  getNewDate() {
    throw new Error('getNewDate function is NULL')
  }

  setView() {
    throw new Error('setView function is NULL')
  }
}

View.prototype.getNewDate = function (newDate) {
  this._date.push(newDate)
  this.setView()
}
// One View
const view = new View('#outView')

view.setView = function () {
  this._idInDOM.innerHTML = this._date.pop()
}

export const facade = function (date) {
  view.getNewDate(date)
}

observer.subscribe('viewDate', facade)

// Two View
const canvasView = new View('#canvasView')

canvasView.setView = function () {
  const text = this._date.pop()
  const x = text.length

  const ctx = this._idInDOM.getContext('2d')

  const clearCanvas = () => {
    ctx.clearRect(0, 0, 300, 300)
  }

  const animate = () => {
    ctx.font = '40px serif'
    ctx.lineWidth = 1
    ctx.strokeStyle = '#0000ff'
    clearCanvas()
    ctx.strokeText(text, 150 - x * 8, 150)
    ctx.stroke()

    setTimeout(() => {
      ctx.lineWidth = 3
      ctx.strokeStyle = '#07e281'
      ctx.font = '50px serif'

      clearCanvas()
      ctx.strokeText(text, 150 - x * 10, 150)
      ctx.stroke()
    }, 200)

    setTimeout(() => {
      ctx.lineWidth = 7
      ctx.strokeStyle = '#e105f1'
      ctx.font = '60px serif'

      clearCanvas()
      ctx.strokeText(text, 150 - x * 14, 150)
      ctx.stroke()
    }, 400)
  }
  window.requestAnimationFrame(animate)
}

export const facadeCanvas = function(date) {
  canvasView.getNewDate(date)
}

observer.subscribe('viewDate', facadeCanvas)
