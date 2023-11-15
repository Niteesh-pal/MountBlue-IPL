const csvtojson = require('csvtojson');
const fs = require('fs');

csvtojson()
.fromFile('data/matches.csv')
.then((json)=>{
    const matchId = [];

    for(let obj of json){
        if(obj.season === '2016'){
             matchId.push(obj.id);
          }
    }


    const extraRun ={};


    csvtojson()
    .fromFile('data/deliveries.csv')
    .then((json)=>{

        json.map((obj)=>{
            if(matchId.includes(obj.match_id)){
                if(!extraRun[obj.bowling_team]){
                    extraRun[obj.bowling_team]=0;
                }

                extraRun[obj.bowling_team] = Number(extraRun[obj.bowling_team]) + Number( obj.extra_runs);
               
            }  
        })
        
        fs.writeFileSync('public/output/extraRuns.json',JSON.stringify(extraRun,null,2));

    
    })

    
})