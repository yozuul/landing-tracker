import Router from '@koa/router'
import { addFormClick, addUserVisit } from '../api'
// import fs from 'fs'

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

// const publicScript = './public/tracker.js'
//
// router.get(publicScript, async (ctx) => {
//    fs.readFile(publicScript, 'utf8', (err, code) => {
//       if (err) {
//          ctx.status = 500
//          ctx.body = 'Internal error'
//          throw err
//       } else {
//          ctx.body = code
//          ctx.status = 200
//       }
//    })
//    return
// })



export { router }