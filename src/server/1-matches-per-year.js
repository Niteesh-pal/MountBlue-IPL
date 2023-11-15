const  fs = require('fs');
// const data = require('../data/deliveries.csv')
   // const data = require('../public/output')
const csvtoJson = require('csvtojson');

csvtoJson()
.fromFile('data/matches.csv')
.then((json)=>
{
   numberOfMatches(json);
})



function numberOfMatches(json){
    let obj={}
    for(let i = 0 ; i<json.length; i++)
   {
      if(!obj[json[i].season]){
         obj[json[i].season]=0;
        }

        obj[json[i].season]++;
   }

   // console.log(obj)

      fs.writeFileSync('public/output/matchesPerYear.json',JSON.stringify(obj));
}

