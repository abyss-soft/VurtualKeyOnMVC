import { observer } from './UserInterface'

class DomainModel {
  constructor() {
    this._date = []
  }

  setDate(date) {
    this._date.push(date)
  }

  getDate() {
    return this._date.pop()
  }
}

const model = new DomainModel()

export const setFacadeDate = function () {
  return model.getDate()
}
export const getFacadeDate = function (date) {
  model.setDate(date)
  observer.changeDate('viewDate', model.getDate())
}

observer.subscribe('newDate', getFacadeDate)
observer.subscribe('viewDate', setFacadeDate)
