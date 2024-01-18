/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMovie = /* GraphQL */ `
  subscription OnCreateMovie(
    $filter: ModelSubscriptionMovieFilterInput
    $owner: String
  ) {
    onCreateMovie(filter: $filter, owner: $owner) {
      title
      publishingYear
      poster
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateMovie = /* GraphQL */ `
  subscription OnUpdateMovie(
    $filter: ModelSubscriptionMovieFilterInput
    $owner: String
  ) {
    onUpdateMovie(filter: $filter, owner: $owner) {
      title
      publishingYear
      poster
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteMovie = /* GraphQL */ `
  subscription OnDeleteMovie(
    $filter: ModelSubscriptionMovieFilterInput
    $owner: String
  ) {
    onDeleteMovie(filter: $filter, owner: $owner) {
      title
      publishingYear
      poster
      createdAt
      updatedAt
      owner
    }
  }
`;
