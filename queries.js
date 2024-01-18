/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMovie = /* GraphQL */ `
  query GetMovie($title: String!) {
    getMovie(title: $title) {
      title
      publishingYear
      poster
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMovies = /* GraphQL */ `
  query ListMovies(
    $title: String
    $filter: ModelMovieFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listMovies(
      title: $title
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        title
        publishingYear
        poster
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
