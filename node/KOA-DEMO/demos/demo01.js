const KOA = require('koa')


const app = new KOA()

const main = function(ctx){
  ctx.response.body = 'Hello world'
}

app.use(main)

app.listen(3000,function() {
  console.log('项目启动成功');
})