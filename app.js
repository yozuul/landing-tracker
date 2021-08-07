import Koa from 'koa';
import koaBody from 'koa-body'
import cors from '@koa/cors';
import { router } from './router'
// import serve from 'koa-static'
// import mount from 'koa-mount'

const app = new Koa()

app.use(cors())
app.use(koaBody())
app.use(router.routes())
app.use(router.allowedMethods())

// app.use( mount( '/public', serve('./public'))) ;

// app.use(async ctx => {
//    ctx.body = 'Test';
// });

app.listen(3000);