import { defHttp } from '/@/utils/http/axios';

import type SearchParameters from '../SearchParameters';
import type PageResult from '../PageResult';
import type DutyEntity from './DutyEntity';

const domain = '/duties';

export function listDuty(params: SearchParameters) {
  return defHttp.get<PageResult<DutyEntity>>({ url: domain, params }, { joinParamsToUrl: true });
}

export function loadDuty(id: number) {
  return defHttp.get<DutyEntity>({ url: `${domain}/${id}` });
}

export function createDuty(data: DutyEntity) {
  return defHttp.post<DutyEntity>({ url: domain, data });
}

export function updateDuty(id: number, data: DutyEntity) {
  return defHttp.put<null>({ url: `${domain}/${id}`, data });
}

export function deleteDuty(id: number) {
  return defHttp.delete<null>({ url: `${domain}/${id}` });
}

export type { DutyEntity };
