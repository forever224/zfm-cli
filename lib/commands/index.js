const { program } = require("commander");
const actionTemplate =  require('./actionTemplate')
module.exports = ()=>{
  program
    .command('template <name> [path]')
    .description('Create a new .vue component file, eg: zfm template CreateNewComponent')
    .action(actionTemplate)
}