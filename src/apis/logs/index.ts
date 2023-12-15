import { defHttp } from '/@/utils/http/axios';

import type SearchParameters from '../SearchParameters';
import type Page from '../PageResult';
import type LogEntity from './LogEntity';

const domain = '/logs';

export function listLogs(params: SearchParameters) {
  return defHttp.get<Page<LogEntity>>({ url: domain, params }, { joinParamsToUrl: true });
}

export function loadLog(id: number) {
  return defHttp.get<LogEntity>({ url: `${domain}/${id}` });
}

export { LogEntity };
