import type AbstractEntity from '../AbstractEntity';

/**
 * 字典项数据实体
 * @export
 * @interface DictionaryItemEntity
 */
export default interface DictionaryItemEntity extends AbstractEntity {
  code: string;
  name: string;
  remark?: string;
  dictionaryId: number;
}
