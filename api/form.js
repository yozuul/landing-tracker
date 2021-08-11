import { Click, Field } from '../models'
import { getIP } from '../utils'

import axios from 'axios'
import curlirize from 'axios-curlirize'
curlirize(axios);

import { cURL } from '../config/config.default'

const addFormClick = (data) => {

   return new Promise(async (resolve) => {
      try {
         const newForm = await Click.create({
            referer: data.referer,
            remote: getIP(data.remote)
         });

         const clickID = newForm.null

         for(let field in data.fields) {
            if(data.fields[field]) {
               Field.create({
                  id_form_click: clickID,
                  field_name: field,
                  field_value: data.fields[field]
               });
            }
         }

         axios
          .post(cURL.visit, { newClick: data.referer })
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