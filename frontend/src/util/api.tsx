import axios from 'axios'

const defaultConfig = {
  'Content-Type': 'application/json'
}

interface IHttpRequestProps {
  url: string
  successCallback: (res: any) => void
  errorCallback: (err: any) => void
}

export function httpRequest(props: IHttpRequestProps) {
  const { url, successCallback, errorCallback } = props
  axios({
    baseURL: process.env.REACT_APP_API_URL,
    method: 'get',
    url: url,
    headers: defaultConfig
  })
    .then((response: any) => {
      successCallback(response)
    })
    .catch((err: any) => {
      errorCallback(err)
    })
}
