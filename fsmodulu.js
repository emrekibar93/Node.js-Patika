const fs = require('fs');

const content={name: "Employee 1 Name", salary: 2000};
const content2={name: "Employee 2 Name", salary: 3000};

fs.writeFile('./employees.json', JSON.stringify(content), err => {
    if (err) {
      console.error(err);
    } else {
      console.log("Dosya oluşturuldu veri yazıldı")
    }
  });

  setTimeout(()=>{
    fs.readFile('./employees.json','utf8',(err,data) => {
        if(err) console.log(err);
        console.log('dosya okundu');
        console.log(data)
    })
    
}, 1500);

setTimeout(()=>{
    fs.appendFile('./employees.json',(JSON.stringify(content2)),'utf8',(err,data) => {
        if(err) console.log(err);
        console.log('dosya guncellendi');
    })
    
}, 3000);

setTimeout(()=>{
    fs.unlink('./employees.json',(err) => {
        if(err) console.log(err);
        console.log('dosya silindi');
    })
    
}, 4000);