import type AbstractEntity from '../AbstractEntity';

export default interface TemplateGroupEntity extends AbstractEntity {
  name: string;
  remark?: string;
}
