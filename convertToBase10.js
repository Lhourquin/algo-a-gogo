function base2toBase10(base2) {
  const base2str = base2.toString();
  const base2Array = base2str.split("");
  let result = 0;
  let power = base2Array.length;
  for (let i = 0; i < base2Array.length; i++) {
    power--;
    result += base2Array[i] * Math.pow(2, power);
  }
  return result;
}

function base8toBase10(base8) {
  const base8str = base8.toString();
  const base8Array = base8str.split("");
  let result = 0;
  let power = base8Array.length;
  for (let i = 0; i < base8Array.length; i++) {
    power--;
    result += base8Array[i] * Math.pow(8, power);
  }
  return result;
}

function hexToDecimal(hex) {
  const hexArray = hex.split("");
  let result = 0;
  let power = hexArray.length;
  for (let i = 0; i < hexArray.length; i++) {
    switch (hexArray[i]) {
      case "A":
        hexArray[i] = 10;
        break;
      case "B":
        hexArray[i] = 11;
        break;
      case "C":
        hexArray[i] = 12;
        break;
      case "D":
        hexArray[i] = 13;
        break;
      case "E":
        hexArray[i] = 14;
        break;
      case "F":
        hexArray[i] = 15;
        break;
    }
    power--;
    result += hexArray[i] * Math.pow(16, power);
  }

  return result;
}


function base10toBase2(base10) {
    console.log('2')
    const array = [];
    function toBin(base10, arr){
        if(base10 == 0){
            return arr.reverse().join('');
        }
        arr.push(base10 % 2);
        return toBin(Math.floor(base10 / 2), arr);
    }
    return toBin(base10, array);
}

function base10toBase2(base10) {
    console.log('1')
    if (base10 === 0) {
        return '0';
    }

    let result = '';
    while (base10 > 0) {
        result = (base10 % 2) + result;
        base10 = Math.floor(base10 / 2);
    }
    return result;
}

const result = base10toBase2(255);
console.log(result)