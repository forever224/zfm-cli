const { program } = require("commander");
const actionTemplate =  require('./actionTemplate')
const actionMvc =  require('./actionMvc')
module.exports = ()=>{
  program
    .command('template <name> [path]')
    .description('Create a new .vue component file, eg: zfm template CreateNewComponent')
    .action(actionTemplate)

  program
    .command('mvc <name>')
    .description('Create a new nodejs Project')
    .action(actionMvc)
}