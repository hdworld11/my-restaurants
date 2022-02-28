/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBranch = /* GraphQL */ `
  mutation CreateBranch(
    $input: CreateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    createBranch(input: $input, condition: $condition) {
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
export const updateBranch = /* GraphQL */ `
  mutation UpdateBranch(
    $input: UpdateBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    updateBranch(input: $input, condition: $condition) {
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
export const deleteBranch = /* GraphQL */ `
  mutation DeleteBranch(
    $input: DeleteBranchInput!
    $condition: ModelBranchConditionInput
  ) {
    deleteBranch(input: $input, condition: $condition) {
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
