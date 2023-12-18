/**
 * 字典项数据实体
 * @export
 * @interface DictionaryItemEntity
 */
interface DictionaryItemEntity {
  dictionaryId: number;
  code: string;
  name: string;
  description?: string;
  sortIndex?: number;
  enabled: string;
  systemic: string;
  createdBy: number;
  createdDate: number;
  lastModifiedBy?: number;
  lastModifiedDate?: number;
}

export default DictionaryItemEntity;
