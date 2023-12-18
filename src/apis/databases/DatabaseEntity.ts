interface DatabaseEntity {
  name: string;
  url: string;
  username: string;
  password: string;
  catalog?: string;
  schema?: string;
  description?: string;
  sortIndex?: number;
  enabled: string;
  systemic: string;
  createdBy: number;
  createdDate: number;
  lastModifiedBy?: number;
  lastModifiedDate?: number;
}

export default DatabaseEntity;
