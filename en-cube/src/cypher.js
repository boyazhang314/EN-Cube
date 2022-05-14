  //////////////////////////////////////////////////
 // Encryption scheme using a 3 x 3 Rubik's Cube //
//////////////////////////////////////////////////

// encrypts the text in accordance to the key
const encrypt = (text, key) => {
  console.log(textToHex(text))
  var enc = textToHex(text).split('') // convert text to hexadecimal array

  // get individual moves
  var codes = key.split(" ")
  // convert text depending on each move
  for (let code of codes) {
    switch(code.charAt(0)) {
      // X axis
      case "L": case "M": case "R":
        enc = xAxisEncode(enc, code, 1)
        break
      // Y axis
      case "U": case "E": case "D":
        enc = yAxisEncode(enc, code, 1)
        break
      // Z axis
      case "F": case "S": case "B":
        enc = zAxisEncode(enc, code, 1)
        break
      default:
        break
    }
  }

  return enc.join('')
}

// encode all x-axis moves
function xAxisEncode(text, code, shift) {
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
    text[ind] = caesar(n, shift, op)
    ind += 3
  }
  
  return text
}

// encode all y-axis moves
function yAxisEncode(text, code, shift) {
  let dir, ind, inc
  switch(code.charAt(0)) {
    case "U":
      ind = 0
      inc = 2
      if (code.charAt(1) === "'") {
        dir = '->'
      } else {
        dir = '<-'
      }
      break;
    case "E":
      ind = 0
      inc = 1
      if (code.charAt(1) === "'") {
        dir = '->'
      } else {
        dir = '<-'
      }
      break;
    case "D":
      ind = 1
      inc = 2
      if (code.charAt(1) === "'") {
        dir = '<-'
      } else {
        dir = '->'
      }
      break;
    default:
      break;
  }

  let poi = [ind + (shift * inc)] % text.length
  const copy = [...text]

  while (ind < text.length) {
    if (dir === "->") {
      text[poi] = copy[ind]
    } else if (dir === "<-") {
      text[ind] = copy[poi]
    }
    ind += inc
    poi = (poi + inc) % text.length
  }

  return text
}

// encode all z-axis moves
function zAxisEncode(text, code, shift) {
  let start, end, rot
  switch(code.charAt(0)) {
    case "F":
      start = 0
      end = text.length - 1
      if (code.charAt(1) === "'") {
        rot = "-+"
      } else {
        rot = '+-'
      }
      break
    case "S":
      start = 1
      end = text.length - 2
      if (code.charAt(1) === "'") {
        rot = "-+"
      } else {
        rot = '+-'
      }
      break
    case "B":
      start = 2
      end = text.length - 3
      if (code.charAt(1) === "'") {
        rot = "+-"
      } else {
        rot = '-+'
      }
      break
    default:
      break
  }

  while (start < end) {
    text[start] = caesar(hexToDec(text[start]), shift, rot.charAt(0))
    text[end] = caesar(hexToDec(text[end]), shift, rot.charAt(1))
    start += 3
    end -= 3
  }

  return text
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
