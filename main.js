const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {games} = require('./data/games');
const {genres} = require('./data/genres');

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/api/games', (req, res)=> {
    res.json(games);
})

app.get('/api/genres', (req, res)=> {
    res.json(genres)
})

app.get('/api/games/:id', (req, res) => {
    const serachedID = req.params.id;
    const gameList = games.results;
    const game = gameList.find(g => g.id === +serachedID);

    if(game) {
        return res.json(game);
    }else{
        return res.send('Non esiste un gioco con questo ID!');
    }
})

app.listen(port, ()=>{
    console.log(`Server up on port ${port}`);
})