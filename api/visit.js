import { Visit } from '../models/visits'
import { getIP } from '../utils'

import axios from 'axios'
import curlirize from 'axios-curlirize'
curlirize(axios);

import { tables, cURL } from '../config/config.default'

const addUserVisit = (data) => {

   return new Promise(async (resolve) => {
      const addData = {
         [tables.visits.fields.referer]: data.referer,
         [tables.visits.fields.ip]: getIP(data.remote),
         [tables.visits.fields.date]: new Date()
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