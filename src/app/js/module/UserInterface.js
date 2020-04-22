class Observer {
  constructor() {
    this._observers = {}
  }
}

Observer.prototype.subscribe = function (event, callback) {
  if ((typeof event !== 'string') || (typeof callback !== 'function')) {
    throw new Error('event || callback in NULL')
  }
  if (this._observers[event] === undefined) {
    this._observers[event] = {}
    this._observers[event].callbacks = []
  }
  this._observers[event].callbacks.push(callback)
}

Observer.prototype.unsubscribe = function (event, callback) {
  if (this._observers[event] === undefined) return
  this._observers[event].callbacks = this._observers[event].callbacks.filter(function (listener) {
    return listener !== callback
  })
}

Observer.prototype.changeDate = function (event, data) {
  if (this._observers[event] === undefined) return

  this._observers[event].callbacks.forEach(event => {
    event(data)
  })
}

Observer.prototype.getDate = function () {
  return this._observers
}

export const observer = new Observer()
