var svgCaptcha = require('svg-captcha');
var data = svgCaptcha.create({
  // 验证码，有两个属性，text是字符，data是svg代码
})
console.log(data)
module.exports = {
  lintOnSave: false,
  devServer: {
    before: function(app) {

      // 验证码接口
      app.get('/msg', (req, res) => {
        res.json(data.data)
      })
    }
  }
}