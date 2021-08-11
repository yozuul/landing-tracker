import { Visit } from '../models/visits'
import { getIP } from '../utils'

import axios from 'axios'
import curlirize from 'axios-curlirize'
curlirize(axios);

import { cURL } from '../config/config.default'

const addUserVisit = (data) => {

   return new Promise(async (resolve) => {
      const addData = {
         referer: data.referer,
         remote: getIP(data.remote)
      }
      try {
         Visit.create(addData);
         axios
          .post(cURL.visit, { newVisit: data.referer })
          .then(res => {
            console.log({ newVisit: data.referer });
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
         resolve({ success: true })
      } catch(err) {
         console.log('Error:', err)
      }
   })
}

export { addUserVisit }