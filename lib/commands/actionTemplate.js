const fs = require('fs')
const ora = require('ora')
const chalk = require('chalk')
const path = require('path')
const { formatUnderline } = require('../config/fomat')
const { compileEjs } = require('../config/util')

module.exports = async (name, filePath = './') => {
  const spinner = ora(chalk.green('创建vue组件....')).start()
  const data = {name, lowerName: formatUnderline(name)}
  const content = await compileEjs('template', data)
  fs.mkdirSync(filePath, {recursive: true})
  filePath = path.resolve(filePath, `${name}.vue`)
  fs.writeFile(filePath, content, { flag: 'ax' }, (err, str) =>{
    if(err){
      let tip = '写入组件错误';
      if(err.code === 'EEXIST'){
        tip += `，${name}.vue组件已经存在!`
      }
      spinner.fail(chalk.bgRed(tip))
      console.log(err)
      return
    }
    spinner.succeed(chalk.green(`写入${name}.vue文件完成`))
    spinner.stop()
  })
}