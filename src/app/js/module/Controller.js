import { observer } from './UserInterface'

class Controller {}

Controller.prototype.keyboard = function (element, eventType, listener) {
  throw new Error('Keyboard function is NULL')
}

const controller = new Controller()

controller.keyboard = function (elementId, eventType, listener) {
  if ((typeof elementId !== 'string') || (typeof eventType !== 'string') || (typeof listener !== 'function')) {
    throw new Error('elementId || eventType || listener in NULL')
  }
  const element = document.querySelector(elementId)
  element.addEventListener(eventType, listener)
}

export const facade = function(date) {
  observer.changeDate('newDate', date)
}

controller.keyboard('textArea', 'keydown', (event) => {
  facade(event.key)
})
