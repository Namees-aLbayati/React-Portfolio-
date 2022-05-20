const {gql}=require('apollo-server-express');

const typeDefs=gql`
type Profile{
  _id:ID
  title:String
  description:String
  website:String
  image:String
comment:[Comment]

}
type Comment{

  comment:String
  username:String
  like:Int
  createdAt:Int
}
type User{
  name:String
  email:String
  password:String
  skills:[String]


}
type Auth{
  token:ID!
  users:User
}
type Query{
    profiles:[Profile]!
    comments:[Comment]!
    users:[User]!
    profile(profileId: ID!): Profile
}
type Mutation{
  addComment(projectId:ID!,comment:String!,username:String!):Profile
addUser(name:String!,email:String!,password:String!):Auth
}

`
module.exports=typeDefs