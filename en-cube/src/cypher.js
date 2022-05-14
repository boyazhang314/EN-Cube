  //////////////////////////////////////////////////
 // Encryption scheme using a 3 x 3 Rubik's Cube //
//////////////////////////////////////////////////

// encrypts the text in accordance to the key
const encrypt = (text, key) => {
  var enc = textToHex(text).split('') // convert text to hexadecimal array

  // get individual moves
  var codes = key.split(" ")
  // convert text depending on each move
  for (let code of codes) {
    switch(code.charAt(0)) {
      // X axis
      case "L": case "M": case "R":
        enc = xAxisEncode(enc, code)
        break
      // Y axis
      case "U": case "E": case "D":
        break
      // Z axis
      case "F": case "S": case "B":
        break
      default:
        break
    }
  }

  return enc.join('')
}

// encode all x-axis moves
function xAxisEncode(text, code) {
  let ind, op
  switch(code.charAt(0)) {
    case "L":
      ind = 0
      if (code.charAt(1) === "'") {
        op = '+'
      } else {
        op = '-'
      }
      break
    case "M":
      ind = 1
      if (code.charAt(1) === "'") {
        op = '+'
      } else {
        op = '-'
      }
      break
    case "R":
      ind = 2
      if (code.charAt(1) === "'") {
        op = '-'
      } else {
        op = '+'
      }
      break
    default:
      break;
  }

  while (ind < text.length) {
    let n = hexToDec(text[ind])
    text[ind] = caesar(n, 1, op)
    ind += 3
  }
  
  return text
}

// encode all y-axis moves
function yAxisEncode(text, code) {
  let ind, op
  switch(code.charAt(0)) {
    case "U":
      break;
    case "E":
      break;
    case "D":
      break;
    default:
      break;
  }
}

// converts ASCII to hexadecimal
textToHex = (ascii) => {
  var arr = []
  for (let i = 0; i < ascii.length; ++i) {
    var hex = Number(ascii.charCodeAt(i)).toString(16)
    arr.push(hex)
  }
  return arr.join('')
}

// decimal to hexadecimal
decToHex = (d) => {
  if (d < 10) return d.toString();
  switch(d) {
    case 10:
      return "a"
    case 11:
      return "b"
    case 12:
      return "c"
    case 13:
      return "d"
    case 14:
      return "e"
    case 15:
      return "f"
  }
}

// hexadecimal to decimal
hexToDec = (h) => {
  switch(h) {
    case "a":
      return 10
    case "b":
      return 11
    case "c":
      return 12
    case "d":
      return 13
    case "e":
      return 14
    case "f":
      return 15
    default:
      return Number(h)
  }
}

// caesar cypher
caesar = (n, shift, op) => {
  switch(op) {
    case '+':
      return decToHex((n + shift) % 16)
    case '-':
      return decToHex((n - shift + 16) % 16)
  }
  return -1
}


// testing
const text = "abcde"
const key = "R R'"
console.log(encrypt(text, key))
