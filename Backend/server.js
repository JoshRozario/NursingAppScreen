const express = require("express")
var cors = require('cors')

const app = express();
app.use(cors())

let first={
    date:"Tue 22 Apr",
    time:"23:30-5:20",
    department:"Intensive Care",
    pay:"$54",
    hospital:"The Best Hospital",
    rating:"⭐⭐⭐⭐",
    address1:"Mountain Street",
    address2:"2000 NSW Australia"
}


let firstAvailable={
    date:"Tue 4 Apr",
    time:"23:30-5:20",
    department:"Intensive Care",
    pay:"$54",
    hospital:"The OK Hospital",
    rating:"⭐⭐⭐",
    address1:"Mountain Street",
    address2:"2000 NSW Australia"
}

let secondAvailable={
    date:"Tue 5 Apr",
    time:"23:30-5:20",
    department:"Intensive Care",
    pay:"$54",
    hospital:"The Best Hospital",
    rating:"⭐⭐⭐⭐",
    address1:"Mountain Street",
    address2:"2000 NSW Australia"
}
let thirdAvailable={
    date:"Tue 10 Apr",
    time:"15:30-23:20",
    department:"Intensive Care",
    pay:"$44",
    hospital:"The Bad Hospital",
    rating:"⭐⭐",
    address1:"Villa Street",
    address2:"2000 NSW Australia"
}

let firstAvailable2={
    date:"Tue 15 Apr",
    time:"23:30-5:20",
    department:"Volitions",
    pay:"$76",
    hospital:"The Nutritional Hospital",
    rating:"⭐⭐⭐",
    address1:"Riinger Street",
    address2:"2002 NSW Australia"
}

let secondAvailable2={
    date:"Tue 17 Apr",
    time:"12:22-12:20",
    department:"General Practition",
    pay:"$33",
    hospital:"The Triage Hospital",
    rating:"⭐⭐⭐⭐",
    address1:"Seeeeesh Street",
    address2:"2000 NSW Australia"
}
let thirdAvailable2={
    date:"Tue 18 Apr",
    time:"2:30-15:20",
    department:"Intensive Care",
    pay:"$123",
    hospital:"The Random Hospital",
    rating:"⭐⭐⭐⭐⭐",
    address1:"Banger Street",
    address2:"2001 NSW Australia"
}

let date1 = []
date1.push(firstAvailable) 
date1.push(secondAvailable)
date1.push(thirdAvailable)
date2 =[]
date2.push(firstAvailable2) 
date2.push(secondAvailable2)
date2.push(thirdAvailable2)




let jobs={
    invites: [],
    available: [],
    dates:[]
}



jobs.invites.push(first)
jobs.available.push(date1)
jobs.available.push(date2)
jobs.dates.push("1 - 10 Apr 2021")
jobs.dates.push("11 - 20 Apr 2021")




app.get("/", (req,res)=>{
    res.send(jobs)
});


app.listen(5000,() =>{
    console.log("Listening on port 5000")
})