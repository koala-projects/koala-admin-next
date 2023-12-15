import { defHttp } from '/@/utils/http/axios';

import type SearchParameters from '../SearchParameters';
import type Page from '../PageResult';
import type DatabaseEntity from './DatabaseEntity';
import type SimpleDatabaseTable from './SimpleDatabaseTable';

const domain = '/databases';

export function listDatabases(params: SearchParameters) {
  return defHttp.get<Page<DatabaseEntity>>({ url: domain, params }, { joinParamsToUrl: true });
}

export function loadDatabase(id: number) {
  return defHttp.get<DatabaseEntity>({ url: `${domain}/${id}` });
}

export function createDatabase(data: DatabaseEntity) {
  return defHttp.post<DatabaseEntity>({ url: domain, data });
}

export function updateDatabase(id: number, data: DatabaseEntity) {
  return defHttp.put<null>({ url: `${domain}/${id}`, data });
}

export function deleteDatabase(id: number) {
  return defHttp.delete<null>({ url: `${domain}/${id}` });
}

export function listDatabaseTables(id: number) {
  return defHttp.get<SimpleDatabaseTable[]>({ url: `${domain}/${id}/tables` });
}

export function connectDatabase(data: DatabaseEntity) {
  return defHttp.post<Boolean>({ url: `${domain}/connect`, data });
}

export { DatabaseEntity };
