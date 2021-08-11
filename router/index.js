import Router from '@koa/router'
import { addFormClick, addUserVisit } from '../api'

const router = new Router()

router.post('/addFormClick', async (ctx) => {
   console.log('addFormClick');
   try {
      const result = await addFormClick({...ctx.request.body})
      ctx.body = result
   }
   catch (err) {
      console.log('Error:', err)
      ctx.status = 500
      ctx.body = 'Internal error'
   }
})

router.post('/addUserVisit', async (ctx) => {
   console.log('addUserVisit');
   try {
      const result = await addUserVisit({...ctx.request.body})
      ctx.body = result
   }
   catch (err) {
      console.log('Error:', err)
      ctx.status = 500
      ctx.body = 'Internal error'
   }
})


export { router }