
cap1= "hAoPy"
cap2= "moveNEXT"
cap3= "shOrtCAKE"

function capToFront(text) {
  let chars = text.split('')
  const uppercase = chars.filter((char) => char == char.toUpperCase())
  const lowercase = chars.filter((char) => char == char.toLowerCase())
  const result = [...uppercase, ...lowercase].join('')

  return result
}
console.log (capToFront(cap1))
console.log (capToFront(cap2))
console.log (capToFront(cap3))



