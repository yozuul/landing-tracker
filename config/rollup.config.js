import { uglify } from "rollup-plugin-uglify";

export default {
   input: 'trackers/index.js',
   plugins: [
    uglify()
  ],
   output: {
     file: '../../../var/www/html/node.ogon-ok.ru/html/tracker.js',
     format: 'cjs'
   },
 };