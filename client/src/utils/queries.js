import {gql} from '@apollo/client';
export const QUERY_PROJECTS=gql`
query allprojects{
    profiles {
        _id
        title
        description
        website
        image
      }
}

`;

export const QUERY_COMMENT=gql`

query comment{
    comments {
        _id
      comment
      username
      like
    }
  }

`;
export const QUERY_PROJECT1=gql`

query project($profileId: ID!){
  profile(profileId: $profileId) {
    title
    description
    comment {
      username
      comment
    }
  }
}

`
export const QUERY_PRCO=gql`
query getComment($profileId: ID!){
  profile(profileId: $profileId) {
    comment {
      username,comment
    }
  }
}
`

