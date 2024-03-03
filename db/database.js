const Sequelize = require('sequelize');
const db = new Sequelize('sampledb', 'sampleuser', 'samplepass', {
    host: 'localhost',
    dialect: 'mysql' 
  });


  db.sync()
  .then(()=>{
    console.log('data base conneted')
  })
  .catch((err)=>{
    console.error(err)
  })

  module.exports = {
    db
  }



