const KOA = require('koa')


const app = new KOA()

const main = function(ctx){
  if (ctx.require.accepts('xml')){
    ctx.response.type = 'xml'
    ctx.response.body = '<data>Hello world</data>'
  }else if (ctx.request.accepts('json')) {
    ctx.response.type = 'html'
    ctx.response.body = '<data>Hello world</data>'
  }
}

app.use(main)

app.listen(3000,function() {
  console.log('项目启动成功');
})