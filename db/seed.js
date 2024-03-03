const {db} = require('./database')
const {Course, Batch, Teacher, Season, Center} = require('./connection');


const seed = async()=>{
    try {
        await  Center.bulkCreate([
            {id:'pp', name:'Pritampura', city:'New Dehli'},
            {id:'DW', name:'Dwarka', city:'New Dehli'},
            {id:'NO', name:'Noida', city:'New Dehli'},
            {id:'DD', name:'Dheradun', city:'New Dehli'},
            {id:'Ol', name:'Online', city:'New Dehli'}
        ],{
            ignoreDulicates: true
        })
        await  Season.bulkCreate([
            {id:'S', name:'Summer'},
            {id:'F', name:'Fall'},
            {id:'W', name:'Winter'},
            {id:'P', name:'Spring'},
        ],{
            ignoreDulicates: true
        })
        await  Course.bulkCreate([
            {id:'LP', name:'Lauchpad'},
            {id:'CX', name:'Crux'},
            {id:'IB', name:'Interview Bootcamp'},
            {id:'AD', name:'Android Development'},
            {id:'WD', name:'Web Development'},
        ],{
            ignoreDulicates: true
        })
        db.sync({alter:true})
        
    } catch (error) {
        console.error(error);
    }
}
seed();
