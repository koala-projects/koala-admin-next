interface TemplateGroupEntity {
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

export default TemplateGroupEntity;
