







const obj = {
    age: 30,
};


obj['rt'] = 'tr';

let gog = obj;
gog.fg = 'fg';

for (let key in obj){
    console.log(obj[key]);
};