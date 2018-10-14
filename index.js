const qn = require('qn')
const globby = require('globby')
const chalk = require('chalk')

/**
 * 文件夹文件同步到 qiniu
 * @param {*} config  同 qn 的配置
 *              - root 同步目录，相对路径
 *              - ...
 * @param {*} hook 钩子函数，用于单元测试
 * @returns globby获取到文件的数据列表，没有文件返回 undefined
 */
module.exports = function(config, hook = () => {}) {
  if (typeof config !== 'object') config = {}

  config = Object.assign({
    root: '.',
    accessKey: '',
    secretKey: '',
    bucket: '',
    origin: '',
    uploadURL: '',
  }, config)

  const client = qn.create(config)
  
  
  return globby(config.root+'/**/**')
    .then(files => {
      files.forEach(file => {
        client.uploadFile(file, {key: file.replace(config.root+'/', '')}, function (err, result) {
          if (err) {
            hook(err)
            return console.log(chalk.red(err))
          }
          hook(result)
          console.log(
            chalk.green(' √ File: '), 
            chalk.green(result.key), 
            chalk.yellow(result.url)
          )
        })
      })
    })
    .catch(err => {
      hook(err)
      console.log(chalk.red(err))
    })
}

