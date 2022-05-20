const db=require('../config/connection')
const {Profile,User}=require('../models');
const profileSeeds=require('./profileSeeds.json')
const projectsData=require('./projects.json');
db.once('open',async()=>{
    try{
        await Profile.deleteMany({});
        await Profile.create(projectsData);

        await User.deleteMany({});
        await User.create(profileSeeds);

        console.log('your projects seeded NAMEES');
        process.exit(0)
    }catch(err){
        throw err
    }
})