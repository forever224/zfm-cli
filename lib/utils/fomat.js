// 格式化文件名
function formatUnderline(name,symbol = '-'){
  return name.replace(/([^A-Z])([A-Z])/g,`$1${symbol}$2`).toLowerCase()
}
module.exports = {
  formatUnderline
}