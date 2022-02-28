// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Branch } = initSchema(schema);

export {
  Branch
};