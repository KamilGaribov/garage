import { httpRequest } from '../util/api'

export function getCars(page: number = 1, successCallback: (res: any) => void, errorCallback: (err: any) => void) {
  return httpRequest({ url: 'car' + '?' + 'page=' + page, successCallback, errorCallback })
}

export function getCar(id: number, successCallback: (res: any) => void, errorCallback: (err: any) => void) {
  return httpRequest({ url: 'car/' + id, successCallback, errorCallback })
}
