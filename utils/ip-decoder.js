const getIP = (code) => {
   let ip = {}
   let doneIP = []
   const decodeMap = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, 0: 0 }
   const split = code.split('_')
   if(split[1]) {
      let i = 0
      for(let words of split) {
        ip[i] = words; i++
      }
      for(let item in ip) {
        let w = ip[item]
        ip[item] = []
        for(let ii of w.split('')) {
          ip[item].push(decodeMap[ii])
        }
      }
      for(let ipsNum in ip) {
        doneIP.push(ip[ipsNum].join('') + '.')
      }
      return doneIP.join('')
   } else {
     return 'noIP'
   }
 }

export { getIP }