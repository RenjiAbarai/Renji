# Koa2学习笔记



## koa2开始

```javascript
// 启动项目
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
```



```
├── lib
│   ├── application.js    // 入口文件
│   ├── context.js				// 创建网络请求的上下文对象
│   ├── request.js				// 包装request对象
│   └── response.js				// 包装response对象
└── package.json
```





## 中间件



### 统一接口成功或失败返回格式

```js
// 统一接口成功或失败返回格式
function routerResponse() {
    return async (ctx, next) => {
        ctx.success = (data) => {
            ctx.type = 'application/json'
            ctx.body = {
                code: 0,
                msg: 'success',
                data: data
            }
        }
        ctx.fail = (msg, code) => {
            ctx.type = 'application/json'
            ctx.body = {
                code: code || 99,
                msg: msg || '未知错误!',
            }
        }
        await next()
    }
}

module.exports = routerResponse
```

```js
// 在app.js中引用这个中间件
const routerResponse = require('./middleware/routerResponse')
app.use(routerResponse())
router.get('/',ctx=>{
    //期望在api中通过如下方式返回数据 
    ctx.success({
        items:[]
    })
})

//成功返回
{
    "code":200,
    "msg":"success",
    "data":{
        "items":[]
    }
}
//失败返回
{
    "code":99,
    "msg":"参数不完整"
}
```



### 允许跨域设置

```js
module.exports = function (options) {
    return async (ctx,next)=>{
        ctx.set('Access-Control-Allow-Origin', options.allowOrigin.join(','))
        ctx.set('Access-Control-Allow-Methods', options.allowMethods.join(','))
        ctx.set('Access-Control-Allow-Headers', options.allowHeaders.join(','))
        ctx.set('Access-Control-Allow-Credentials', options.allowCredentials);
        await next()
    }
}

// 在app.js中引入该中间件，其中跨域设置中间件要在router中间件前面，否则会无效。
const cors =  require('./middleware/cors')  //跨域设置中间件
app.use(cors({
    allowOrigin:['http://localhost:63343'],
    allowMethods:[],
    allowHeaders:[]
}))

```

