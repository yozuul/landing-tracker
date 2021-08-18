import { Click, Field } from '../models'

import axios from 'axios'
import curlirize from 'axios-curlirize'
curlirize(axios);

import { tables, cURL } from '../config/config.default'
import { getMskTime } from '../utils'

const addFormClick = (data) => {

   return new Promise(async (resolve) => {
      try {
         const newForm = await Click.create({
            [tables.clicks.fields.referer]: data.referer,
            [tables.clicks.fields.ip]: data.remote,
            [tables.clicks.fields.date]: getMskTime()
         });

         const clickID = newForm.null

         for(let field in data.fields) {
            if(data.fields[field]) {
               Field.create({
                  [tables.fields.fields.form_id]: clickID,
                  [tables.fields.fields.name]: field,
                  [tables.fields.fields.value]: data.fields[field]
               });
            }
         }

         axios
          .post(cURL.click, { newClick: data.referer })
          .then(res => {
            console.log({ newClick: data.referer });
            // console.log(res);
          })
          .catch(err => {
            console.log(err);
          });

         resolve({ success: true })

      } catch (err) {
         console.log(err);
      }
   })

}

export { addFormClick }