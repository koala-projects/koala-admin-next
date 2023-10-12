import type AbstractEntity from '../AbstractEntity';

export default interface TemplateEntity extends AbstractEntity {
  name: string;
  content: string;
  groupId: number;
  remark?: string;
}
