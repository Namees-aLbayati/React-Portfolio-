const {Profile,Comment,User}=require('../models');
const { signToken } = require('../utils/auth');
const resolvers={
    Query:{
        profiles:async()=>{
            return await Profile.find({}).populate('comment')
        },
        comments:async()=>{
            return await  Comment.find({})
        },

        profile:async(parent,{profileId})=>{
            return await Profile.findById(profileId).populate("comment")

        },
        users:async()=>{
return await User.find({})
        }

    },
    Mutation:{
        addComment:async(parent,{projectId,comment,username})=>{
const a=await Comment.create({comment,username});
const n=await Profile.findOneAndUpdate(
    {_id:projectId},
    {$addToSet:{comment:a._id}},
    {
        new:true,
        runValidators:true
    }
)
console.log(n,'last')
},

        addUser:async(parent,{name,email,password})=>{
          const newUser=await  User.create({name,email,password});
const token=signToken(newUser);
return{token,newUser}
        }
    }
}

module.exports = resolvers;
