const ejs = require('ejs')
const path = require('path')
const download = require('download-git-repo')
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
const downloadFromGit = (repository, destination, options, spinner)=>{
  return new Promise((resolve, reject) => {
    download(repository, destination, options, err=>{
      if(err){
        if(spinner){
          spinner.fail(chalk.bgRed('下载失败！'))
        }
        reject(err)
      }
      resolve()
    })
  })
}
module.exports = {
  compileEjs,
  downloadFromGit
}