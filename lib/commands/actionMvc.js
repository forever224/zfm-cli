const ora = require('ora')
const chalk = require('chalk')
const { downloadFromGit } = require('../utils/util')
const { mvcPath } = require('../utils/config')
const { commandSpawn } = require('../utils/terminal')

module.exports = async (name)=>{
  const spinner = ora(chalk.green('开始下载nodejs-mvc项目....')).start()
  await downloadFromGit(mvcPath, name, { clone: true }, spinner);
  spinner.info('下载完成！')
  spinner.info('正在安装npm包...')
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  await commandSpawn(command, ['install'], { cwd: `./${name}` })
  spinner.succeed(chalk.green(`安装完成，启动程序请 cd ${name} and node app `))
  spinner.stop()
}