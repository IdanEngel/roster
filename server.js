const express = require('express')
const path = require('path')
const request = require('request')
const app = express()
port = 3000

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756",
    "thunder": "1610612760",
    "raptors": "1610612761",
    "philadelphia": "1610612742",
    "nuggets": "1610612743",
    "celtics": "1610612738",
    "clippers": "1610612746"


}


// console.log(playerData)


app.get('/teams/:teamName', function (req, res) {
    request('http://data.nba.net/10s/prod/v1/2018/players.json', function (err, response, body) {
       let data = JSON.parse(body)
        let teams = data.league.standard
        let playerData = teams
            .filter(f => f.teamId === teamToIDs[req.params.teamName])
            .filter(f => f.isActive === true)
        res.send(playerData)
    })
})



app.listen(port, function () {
    console.log(`Your ${port} port is running`)
})


