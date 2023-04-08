const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;

app.use(cors())

const rappers = {
    '21 savage':{
        'age': 29,
    'birthName': 'Sheyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illisndis'
    },
    'dylan':{
        'age': 30,
        'birthName': 'Mario Dylan',
        'birthLocation': 'London, England'
    }
}




app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html')
})
// dirname tells the computer where ever the file thats running is located start looking for index.html
//there

// lets create a different path here
app.get('/api/:rapperName', (req, res)=>{ //slash after api onwards is a query parameter expres alows
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }
   // res.json(rappers)
})
/*
code explanation for the above code (remenber the url parameter /api/:rapperName  )
if the rappers name typed in from the client side match any object name inside rappers then respond
with that object
*/
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go catch it`)
})

