export default interface AbstractEntity {
  id: number;
  sortIndex?: number;
  isEnabled: string;
  isSystemic: string;
  createdBy: number;
  createdTime: number;
  lastModifiedBy: number;
  lastModifiedTime: number;
}
