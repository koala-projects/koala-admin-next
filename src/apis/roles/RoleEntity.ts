import type AbstractEntity from '../AbstractEntity';

export default interface RoleEntity extends AbstractEntity {
  code: string;
  name: string;
  remark?: string;
}
