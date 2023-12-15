import { defHttp } from '/@/utils/http/axios';

import CodeGenRequest from './CodeGenRequest';
import MultiCodeGenResult from './MultiCodeGenResult';

const domain = '/code-gen';

function codeGenPreview(data: CodeGenRequest) {
  return defHttp.post<MultiCodeGenResult[]>({ url: `${domain}/preview`, data });
}

function codeGenDownload(data: CodeGenRequest) {
  return defHttp.post<string>({ url: `${domain}/download`, data });
}

export type { CodeGenRequest, MultiCodeGenResult };

export { codeGenPreview, codeGenDownload };
