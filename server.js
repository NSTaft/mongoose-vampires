const express = require('express')
const app = require('liquid-express-views')(express())
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const port = 3000
const rowdy = require('rowdy-logger')
const routesReport = rowdy.begin(app)
const Vampire = require('./models/vampire.js')
const db = mongoose.connection

// Homepage
app.get('/', (req,res) => {
    res.send("Mongoose-Vampires homepagae")
})

const newVampires = [
    {
        name: 'FirstMan',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2,
      },
      {
        name: 'SecondMan',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'm',
        victims: 2,
      },
      {
        name: 'FirstWoman',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'f',
        victims: 2,
      },
      {
        name: 'SecondWoman',
        title: 'Count',
        hair_color: 'brown',
        eye_color: 'brown',
        dob: new Date(1971, 2, 13, 7, 47),
        loves: ['cereal','marshmallows'],
        location: 'Minneapolis, Minnesota, US',
        gender: 'f',
        victims: 2,
      }
]
Vampire.insertMany(newVampires)
.then((newVampires) => {
    console.log(newVampires)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    db.close()
})

app.listen(3000, () => {
    console.log('working connection')
    routesReport.print()
})