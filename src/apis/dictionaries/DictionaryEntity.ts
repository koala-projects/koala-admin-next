import type AbstractEntity from '../AbstractEntity';

export default interface DictionaryEntity extends AbstractEntity {
  code: string;
  name: string;
  remark?: string;
}
