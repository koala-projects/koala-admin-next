import { defHttp } from '/@/utils/http/axios';

import type SimpleCodeResult from './SimpleCodeResult';
import type CodeRequest from './CodeRequest';
import type PreviewResponse from './PreviewResponse';

const domain = '/code-gen';

export function codePreview(data: CodeRequest) {
  return defHttp.post<PreviewResponse>({ url: `${domain}/preview`, data });
}

export function codeDownload(data: CodeRequest) {
  return defHttp.post<string>({ url: `${domain}/download`, data });
}

export { SimpleCodeResult as Code, CodeRequest, PreviewResponse };
