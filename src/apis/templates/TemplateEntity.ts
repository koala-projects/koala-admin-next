interface TemplateEntity {
  name: string;
  content: string;
  groupId: number;
  description?: string;
  sortIndex?: number;
  enabled: string;
  systemic: string;
  createdBy: number;
  createdDate: number;
  lastModifiedBy?: number;
  lastModifiedDate?: number;
}

export default TemplateEntity;
