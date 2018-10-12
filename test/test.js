const expect = require('expect.js')
const qnFileSync = require('../index')
const qnConf = require('../qiniu').default

describe('Unit Testing', () => {
  it('Upload', function() {
    qnFileSync({
      root: './test/qn-file-sync',
      accessKey: qnConf.accessKey,
      secretKey: qnConf.secretKey,
      bucket: qnConf.bucket,
      origin: qnConf.origin,
      uploadURL: qnConf.uploadURL
    }, result => {
      if (typeof result === 'string') {
        expect(result).to.be('xxxs-sdfsdfsdf')
      } else {
        expect(result.key).to.be('index.js')
      }
    })
  })
})