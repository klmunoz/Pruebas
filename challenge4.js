'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let currentLine = 0;
let inputString = ["88 99 200", "88 99 300", "99 32 100", "12 12 15"];
const threshold = 2;

function readLine() {
    return inputString[currentLine++];
}

function processLogs(logs, threshold) {
    let object = {};
    let array = [];
    logs.forEach(log => {
       let arrayLogs = log.split(' ');
       if(arrayLogs[0] != arrayLogs[1]){
           for (let i = 0; i < 2; i++) {
                if (!object.hasOwnProperty(arrayLogs[i])) {
                    object[arrayLogs[i]] = 1
                }else{
                    object[arrayLogs[i]] = object[arrayLogs[i]] + 1;
                }
           }
       }else{
        if (!object.hasOwnProperty(arrayLogs[0])) {
            object[arrayLogs[0]] = 1
        }else{
            object[arrayLogs[0]] = object[arrayLogs[0]] + 1;
        }
       }
    });

    // Verificar si las cantidades son mayores o iguales que threshold
    // Almacenar los datos dentro de archivo txt
    Object.keys(object).forEach(e =>{
        // const text = `ID: ${e} Transactions: ${object[e]} \n`;
        if(object[e] >= threshold){
            array.push(e)
        }
    })

    console.log(object)
    return array;
}

function writeInFile(data) {
  fs.writeFileSync('./logs.txt', data);
}

(function main() {
    let logs = [];
    for (let i = 0; i < inputString.length; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }
        const result = processLogs(logs, threshold);
        console.log(result);  
        writeInFile(result.join('\n') + '\n');
})()