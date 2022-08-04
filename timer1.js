


let inputArray = process.argv.splice(2);
let cleanArray = inputArray.filter(time => time > 0 )

console.log(cleanArray)

for ( let i of  cleanArray) {
  setTimeout(()=>{
    process.stdout.write('\x07')
    },i*1000 );
}

