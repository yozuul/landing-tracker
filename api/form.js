import { Click, Field } from '../models'
import { getIP } from '../utils'
import { curly } from'node-libcurl'
import { cURL } from '../config/config.default'

const addFormClick = (data) => {
   console.log(data);
   return new Promise(async (resolve) => {
      try {
         const newForm = await Click.create({
            referer: data.referer,
            remote: getIP(data.remote)
         });

         const clickID = newForm.null

         for(let field in data.fields) {
            Field.create({
               id_form_click: clickID,
               field_name: field,
               field_value: data.fields[field]
            });
         }

         const { statusCode, data, headers } = await curly.get(cURL)
         console.log(statusCode);
         console.log(headers);

         resolve({ success: true })

      } catch (err) {
         console.log(err);
      }
   })
}

export { addFormClick }