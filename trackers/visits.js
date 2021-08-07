import { fetchData } from '../utils/fetch-data'
import { server } from '../config/config.default'

const url = `/addUserVisit`;
// const url = `${server.url}:${server.port}/addUserVisit`;

const getData = (inputID) => {
   const tag = document.querySelector(inputID)
   const data = {
      referer: window.location.href,
      remote: tag ? tag.value : 'noIP'
   }
   fetchData(url, data)
}

getData('#tracker_data')