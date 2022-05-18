'use strict';
const fs = require('fs');

process.stdin.resume();

process.stdin.setEncoding('utf-8');
let inputString = ['1','remove kevin'];

let readtext;

let currentLine = 0;
function readLine() {
  return inputString[currentLine++];
}

//TODO
function inventoryList() {
  return {
    add(name) {
      readFile();
      setTimeout(() => {
        let arrayText = readtext.split(',');
        if(arrayText.length < 10){
            if(readtext.indexOf(name) === -1 ){
              arrayText.push(name)
              readtext = arrayText.toString()
              writeInFile(readtext)
            }else{
              console.log('Este nombre ya existe');
            }
        }else{
          console.log('el numero de nombres no puede ser superior a 10');
        }
      }, 100);
    },
    remove(name) {
      readFile();
      setTimeout(() => {
        let arrayText = readtext.split(',');
        if(readtext.includes(name)){
          arrayText.some((n, index) => {
            if(n === name){
              arrayText.splice(index);
              readtext = arrayText.toString()
              writeInFile(readtext)
              return
            }
          })
        }else{
          console.log('Este nombre no existe');
        }
      }, 100);
    },
    getList() {
      readFile();
      setTimeout(() => {
        console.log(readtext)
      }, 100);
    },
  };
}

function writeInFile(data) {
  fs.writeFileSync('./output.txt', data);
}

async function readFile(){
  fs.readFile('./output.txt', 'utf-8', (err, data) => {
    if(err){
      console.log(err)
    }else{
      readtext = data;
    }
  });
}

function main() {
  const obj = inventoryList();
  const operationCount = parseInt(readLine().trim());

  
  for (let i = 1; i <= operationCount; i++) {
    const operationInfo = readLine().trim().split(' ');
    let value = operationInfo[1];
    let operation = operationInfo[0]
    obj[operation](value)
  }
}

main();

