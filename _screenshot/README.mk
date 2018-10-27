Install [phantomjs](http://phantomjs.org/screen-capture.html) and get the web page screenshot with:

```sh
$ phantomjs rasterize.js <url>
```
NOTE: phantomjs don't support css var (use sass preprocessor instead)

As an alternative use [wkhtmltoimage](https://madalgo.au.dk/~jakobt/wkhtmltoxdoc/wkhtmltoimage_0.10.0_rc2-doc.html)