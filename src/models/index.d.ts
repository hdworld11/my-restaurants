import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BranchMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Branch {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Branch, BranchMetaData>);
  static copyOf(source: Branch, mutator: (draft: MutableModel<Branch, BranchMetaData>) => MutableModel<Branch, BranchMetaData> | void): Branch;
}