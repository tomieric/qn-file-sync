# USAGE

```
const qnFileSync = require('@tomeric/qn-file-sync')

/**
* qnFileSync(options)
*/
qnFileSync({
  # sync folder
  root: './svn/www',
  accessKey: 'your access key',
  secretKey: 'your secret key',
  bucket: 'your bucket name',
  origin: 'http://{bucket}.u.qiniudn.com',
  uploadURL: 'http://up-z2.qiniup.com/'
}).then(files => {})
```

### options
  * `root` sync file 
  * `accessKey`
  * `secretKey`
  * `bucket`
  * `origin`
  * `uploadURL`