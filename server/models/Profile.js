const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
  title: {
    type: String,
  },
  image:{
    type:String
  }
  ,
  description: 
    {
      type: String,
    },
    website:{
      type:String
    },
    comment:[{
      type:Schema.Types.ObjectId,
    ref:'Comment'
    }]
  
});

const Profile = model('Profile', projectSchema);

module.exports = Profile;
