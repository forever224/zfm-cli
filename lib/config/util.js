const ejs = require('ejs')
const path = require('path')

// 编译esj模板
const compileEjs = (templateName, data) => {
  const templatePath = path.resolve(__dirname, `../templates/${templateName}.ejs`)
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath,{ data },(err, str) => {
      if(err){
        reject(err)
      }
      resolve(str)
    })
  })
}
module.exports = {
  compileEjs
}