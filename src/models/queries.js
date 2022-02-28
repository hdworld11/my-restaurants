/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncBranches = /* GraphQL */ `
  query SyncBranches(
    $filter: ModelBranchFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBranches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getBranch = /* GraphQL */ `
  query GetBranch($id: ID!) {
    getBranch(id: $id) {
      id
      name
      description
      latitude
      longitude
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listBranches = /* GraphQL */ `
  query ListBranches(
    $filter: ModelBranchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBranches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        latitude
        longitude
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
