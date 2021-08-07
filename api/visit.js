import { Visit } from '../models/visits'
import { getIP } from '../utils'

const addUserVisit = (data) => {
   return new Promise(async (resolve) => {
      console.log(data);
      const addData = {
         referer: data.referer,
         remote: getIP(data.remote)
      }
      try {
         Visit.create(addData);
         resolve({ success: true })
      } catch(err) {
         console.log('Error:', err)
      }
   })
}

export { addUserVisit }