import type AbstractEntity from '../AbstractEntity';

export default interface PermissionEntity extends AbstractEntity {
  code: string;
  name: string;
  remark?: string;
}
