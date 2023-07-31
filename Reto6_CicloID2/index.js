import express from 'express'
import 'dotenv/config';

import database from './mongodb.js';
import users from './model/users.js';
import restaurantes from './model/restaurantes.js';

const app = express()
app.use(express.json())

app.get('/users', async (req, res) => {
  try{
    const data = await users.find();
    res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
});

app.post('/users', (req, res) => {
  const data = new users({
      name: req.body.name,
      age: req.body.age
  })
  try {
    data.save();
    res.send("Success").status(200)
  }
  catch (error) {
      res.status(400).json({message: error.message})
  }
})

app.delete('/users/:name', async (req, res) => {
  try {
    const name = req.params.name
    const data = await users.findOneAndDelete({
      name
    })
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

app.post('/restaurante', async (req, res) => {
  try{
    const rest = await restaurantes.find()
    const data = new restaurantes({
      name: req.body.name,
      comments: req.body.comments,
      grades: req.body.grades,
      cuisine: req.body.cuisine,
      borough: req.body.borough,
      address: req.body.address,
      restaurant_id: rest.length + 1
    })
    data.save();
    res.send("Success").status(200)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

app.get('/restaurante/:calificacion', async (req, res) => {
  const grade = req.params.calificacion
  console.log(grade)
  try{
    const data = await restaurantes.aggregate([
      {
        $match: { calificacion: grade }
     }
    ])
    res.send(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
});

app.patch('/restaurante/comment', async (req, res) => {
  try{
    const name = req.body.name
    const namePerson = req.body.namePerson
    const comment = req.body.comment
    
    const data = await restaurantes.findOneAndUpdate({
      name
    }, { comments : [{
        nameUser: namePerson,
        comment
      }]
    }
    )
    data.save();
    res.send("Success").status(200)
  } 
  catch(error) {
    res.status(500).json({message: error.message})
  }
})

app.listen(process.env.PORT, () =>
  console.log(`App listening on port ${process.env.PORT}!`),
);