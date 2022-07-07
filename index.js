const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send("hi bro i'm learn to node express and nodemon ");
})

const users = [
    { id: 0, name: "shabana", email: "shabana@gamil.com", age: 34 },
    { id: 1, name: "suchoriata", email: "suchoriata@gamil.com", age: 34 },
    { id: 2, name: "shakila", email: "shakila@gamil.com", age: 34 },
    { id: 3, name: "moufia", email: "moufia@gamil.com", age: 34 },
    { id: 4, name: "karbala", email: "karbala@gamil.com", age: 34 },
    { id: 5, name: "mamphia", email: "mamphia@gamil.com", age: 34 }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    //search query 
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post ", req.body)
    //res.send(JSON.stringify(newUser))
    res.json(newUser);
})

//dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const user = users[id];
    res.send(user);
})


app.listen(port, () => {
    console.log(`listening form node ${port}`);
})