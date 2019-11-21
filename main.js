const readlineSync = require('readline-sync');


const convertor = require('./convertor');


let binary, hexa;


do 
{
 
    binary =  convertor.convertToBinary(parseInt(readlineSync.question( "Enter a positive number for converting to binary " )));

}

while (!binary);


console.log(binary);


do 

{

    hexa =  convertor.convertToHexa(parseInt(readlineSync.question( "Enter a positive number for converting to hexadecimal: " )));

}

while (!hexa);


console.log(hexa);
