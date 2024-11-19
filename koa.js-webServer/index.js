const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    if (ctx.request.path === '/') {
        ctx.response.body = '<h2> İndex Sayfasına Hoş Geldiniz</h2>';
    }
    else if (ctx.request.path === '/hakkimda') {
        ctx.response.body = '<h2> Hakkımda Sayfasına Hoş Geldiniz</h2>';
    }
    else if (ctx.request.path === '/iletisim') {
        ctx.response.body = '<h2> İletişim Sayfasına Hoş Geldiniz</h2>';
    }
    else (
        ctx.response.body = 'Sayfa Bulunamadı'
    )
    });
const port = 3000
app.listen(port,()=>{
    console.log(`Server ${port} portunda çalıştı`)})