const express = require('express');
const app = express();
const  {Course, Season, Center, Batch} = require('./db/connection')
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended:true}))



app.get('/batchcode',async (req, res)=>{
    try {
        const center = await Center.findAll();
        const season = await Season.findAll();
        const course = await Course.findAll();
        const year =  ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
        res.render('batchcode',{
            center, season, course , year
        })

    } catch (error) {
        console.error(error);
    }
})

app.post('/batchcode', async (req, res)=>{
    let bacthCode = '';
    bacthCode += req.body.course
    bacthCode += req.body.center
    bacthCode += req.body.year.substr(2)
    bacthCode += req.body.season
    bacthCode += req.body.batchno
    try {
        await Batch.create({
            code : bacthCode,
            year: req.body.year,
            courseId: req.body.course,
            centerId: req.body.center,
            seasonId: req.body.season,
            start: Date.parse(req.body.startDate),
            end: Date.parse(req.body.endDate)
        })
    } catch (error) {
        console.error(error)
    }
})

app.get('/batches',async (req, res)=>{
    const batch = await Batch.findAll({
        include: [Center, Course, Season]
    })
    res.render('batches', {batch});
})

module.exports = {
    app
}