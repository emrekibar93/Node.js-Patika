const arguments = process.argv.slice(2)

function alanhesap (yaricap){
let alan=(2*3.14*yaricap)
console.log(`Yaricapi ${yaricap} olan dairenin alani ${alan}`)
}

alanhesap(arguments[0]*1)
