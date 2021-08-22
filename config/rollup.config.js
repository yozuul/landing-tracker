import {} from 'dotenv/config'

export default {
   input: 'trackers/index.js',
   output: {
     file: process.env.PUBLIC_TRACKER_SCRIPT_PATH,
     format: 'cjs'
   },
 };