const inquirer = require('inquirer');
const numbersText = [
    { number: 1, text: 'un' },
    { number: 2, text: 'deux' },
    { number: 3, text: 'trois' },
    { number: 4, text: 'quatre' },
    { number: 5, text: 'cinq' },
    { number: 6, text: 'six' },
    { number: 7, text: 'sept' },
    { number: 8, text: 'huit' },
    { number: 9, text: 'neuf' },
    { number: 10, text: 'dix' },
    { number: 11, text: 'onze'},
    { number: 12, text: 'douze'},
    { number: 13, text: 'treize'},
    { number: 14, text: 'quatorze'},
    { number: 15, text: 'quinze'},
    { number: 16, text: 'seize'},
    { number: 20, text: 'vingt' },
    { number: 30, text: 'trente' },
    { number: 40, text: 'quarante' },
    { number: 50, text: 'cinquante' },
    { number: 60, text: 'soixante' },
    { number: 70, text: 'soixante-dix' },
    { number: 80, text: 'quatre-vingt' },
    { number: 90, text: 'quatre-vingt-dix' },
    { number: 100, text: 'cent' },
    { number: 1000, text: 'mille' },
    { number: 1000000, text: 'un million' },
    { number: 1000000000, text: 'un milliard' }
];

function getSubArrays(number){
    const arrayOfSubArrays = [];
    const numberToArray = String(number).split('').reverse();
    while(numberToArray.length != 0){
        arrayOfSubArrays.push(numberToArray.splice(0, 3).reverse());
    }
    arrayOfSubArrays.reverse();
    return arrayOfSubArrays;
}

function hundredsTensUnits(array){
    const arrayLength = array.length;
    let tens = '';
    let units = '';
    let hundreds = '';
    switch(arrayLength){
        case 3 :
            if(array[0] !== '0'){
                hundreds = numbersText.find((obj)=> obj.number == array[0]).text + ' cent ';
            }else if(array[0] == '1'){
                hundreds = 'cent ';
            }
            array.shift();
        case 2 : 
            if(array[0] == '0'){
                if(array[1] != '0'){
                    units = numbersText.find((obj)=> obj.number == array[1]).text;
                }
            }else {
                if(Number(array.join('')) > 0 && Number(array.join('')) < 17){
                    tens = numbersText.find((obj)=> obj.number == array.join('')).text;
                }else if(Number(array.join('') > 70 && Number(array.join('')) < 77 || Number(array.join('')) > 90 && Number(array.join('')) < 97 )){
                    const number = Number(array[0]) - 1;
                    tens = numbersText.find((obj)=> obj.number == number + '0').text;
                    if(Number(array.join('') != 71)){
                        units = '-' + numbersText.find((obj)=> obj.number == '1' + array[1]).text;
                    }else{
                        // 21, 31, 41, 51, 61, 71 TO DO
                        units = '-et-' + numbersText.find((obj)=> obj.number == '1' + array[1]).text;
                    }
                }else{
                    if(array[0] != '0'){
                        tens = numbersText.find((obj)=> obj.number == array[0] + '0').text;
                    }
                    if(array[1] !== '0'){
                        units = '-' + numbersText.find((obj)=> obj.number == array[1]).text;
                    }else if(array[1] == '1'){
                        units = '-et-un'
                    }
                }
            }
            break;
        case 1 :
            units = numbersText.find((obj)=> obj.number == array[0]).text;
            break;              
    }
    return `${hundreds}${tens}${units}`;
}

function numberToScriptual(number){
    if(number == 0){
        console.log('zéro')
        return;
    }
    const subArrays = getSubArrays(number);
    let scriptualNumber = '';
    switch(subArrays.length){
        case 4:
            scriptualNumber += hundredsTensUnits(subArrays[0]) + ' milliard ';
            subArrays.shift();
        case 3:
            scriptualNumber += hundredsTensUnits(subArrays[0]) + ' millions ';
            subArrays.shift();
        case 2:
            const isOne = subArrays[0].length == 1 && subArrays[0].includes('1');
            if(!isOne){
                scriptualNumber += hundredsTensUnits(subArrays[0]) + ' milles ';
            }else{
                scriptualNumber += 'milles ';
            }
            subArrays.shift();
        case 1:
            scriptualNumber += hundredsTensUnits(subArrays[0]);
            break;
    }
    console.log(scriptualNumber);
}

function askNumber(){
    inquirer.prompt([{
        type: 'input',
        name: 'number',
        message: 'Entrez votre nombre',
    }])
    .then((answers) => {
        numberToScriptual(answers.number);
    }
    );
}

askNumber();