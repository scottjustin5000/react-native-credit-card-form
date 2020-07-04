const formats = {
  amex: [4, 6, 5],
  mastercard: [4, 4, 4, 4],
  visa: [4, 4, 4, 4],
}

const cardDetectors ={
  amex: /^3[47]\d{0,13}/,
  mastercard: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
  visa: /^4\d{0,15}/
}

const formatted = (value, matchedFormat) => {
  if(!matchedFormat || !value || value.length ===1) return value
  value = value.replace(/\s+/g, '')
  const vals = []
  const chars = value.split('')
  for(let c of matchedFormat) {
    let counter = c
    const builder = []
    while(chars.length && counter) {
      builder.push(chars.shift())
      counter--
    }
    vals.push(builder.join(''))
  }
  return vals.join(' ')
}

const get = (value) => {
  for (let key in cardDetectors) {
    if (cardDetectors[key].test(value)) {
      const matchedFormat = formats[key]
      return {
        type: key,
        limit: matchedFormat.reduce((memo, current)=> { return memo + current} ,0) + matchedFormat.length -1,
        format: formatted(value, matchedFormat).trim()
      }
    }
  }
}
export default get