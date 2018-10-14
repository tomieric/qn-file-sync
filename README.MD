# qn-file-sync

> File sync to Qiniu

[DOC](./doc/README.MD)

## USAGE

```
$ npx @tomieric/qn-file-sync -c qiniu.js -d ./dist

# or
# default config file is `package.json`
$ npx @tomieric/qn-file-sync -d ./dist 
```

## API

```
const qnFileSync = require('@tomieric/qn-file-sync')

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

## Devlopmenet

```
npm test
```

#
(c) MIT LICENSE