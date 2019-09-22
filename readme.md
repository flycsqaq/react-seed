# webpack
## 1. entry
在开发环境打包mockjs

## 2. output

## 3. loader
webpack自身只能识别javascript，loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块(js模块)。
```
{
    test: //,
    use: '',
}
```

## 4. plugins

## 5. mode
`development | production`

## 6. css
### 6.1 mini-css-extract-plugin
将css压缩并插入html `<style>`.

### 6.2 typings-for-css-modules-loader
css模块化, 将类名转化为hash,同时具有css-loader的效果

### 6.3 css-loader
解释(interpret) @import 和 url(), 将css 转化为 commonjs.

### 6.4 less-loader | sass-loader
将less/sass编译成css
## 7. js

## 8. file

## 9. html

## 10. hot