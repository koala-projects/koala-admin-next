import type AbstractEntity from '../AbstractEntity';

export default interface DatabaseEntity extends AbstractEntity {
  name: string;
  url: string;
  username: string;
  password: string;
  catalog?: string;
  schema?: string;
  remark?: string;
}
