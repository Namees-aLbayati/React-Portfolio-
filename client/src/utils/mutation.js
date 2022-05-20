import { gql, useMutation } from '@apollo/client';
export const ADD_COMMENT=gql`
mutation a($projectId: ID!, $comment: String!, $username: String!){
  addComment(projectId: $projectId, comment: $comment, username: $username) {
  title

  }
}
`;
