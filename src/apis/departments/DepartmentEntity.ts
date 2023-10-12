import type AbstractEntity from '../AbstractEntity';

export default interface DepartmentEntity extends AbstractEntity {
  code: string;
  name: string;
  remark?: string;
  parentId: DepartmentEntity;
}
