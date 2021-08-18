import { Visit } from '../models/visits'

import axios from 'axios'
import curlirize from 'axios-curlirize'
curlirize(axios);

import { tables, cURL } from '../config/config.default'
import { getMskTime } from '../utils'

const addUserVisit = (data) => {

   return new Promise(async (resolve) => {
      const addData = {
         [tables.visits.fields.referer]: data.referer,
         [tables.visits.fields.ip]: data.remote,
         [tables.visits.fields.date]: getMskTime()
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