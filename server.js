
const express = require('express'),
    app = express(),
    port = 8000,
    cors = require('cors'),
    faker = require('faker');


app.use(cors());
app.use(express.json());

// app.get('/',(req,res) => [
//     res.json({msg: "express"})
// ])

class User {
    constructor(){
        this._id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
var user = new User();
console.log(user)

class Company {
    constructor (){
        this._id = faker.random.number();
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipcode = faker.address.zipCode();
    }
}
var company = new Company();
console.log(company)


// app.get('/name',(req,res) => {
//     res.json({name: "Chris"})
// })

// app.post('/create',(req,res) => {
//     console.log(req.body);
//     res.json({msg:"ok!"})
// })

app.listen(port,() => console.log('Listening on port ${port}'));