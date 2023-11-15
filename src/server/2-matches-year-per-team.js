const csvtoJson = require('csvtojson');
const fs = require('fs');

csvtoJson()
.fromFile('data/matches.csv')
.then((json)=>{
    
    matchesWonByTeam(json);
})

function matchesWonByTeam(json){
    let object = {};
    json.map((obj)=>{
        
        if(!object[obj.winner]){
            object[obj.winner] = {}
        }

        if(!object[obj.winner][obj.season]){
            object[obj.winner][obj.season] = 0;
        }

        object[obj.winner][obj.season]++;
    })
        fs.writeFileSync('public/output/matchesPerTeamPerYear.json',JSON.stringify(object))
}