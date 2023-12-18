import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const systemLog: AppRouteModule = {
  path: '/system-log',
  name: 'SystemLog',
  component: LAYOUT,
  redirect: '/system-log/operation',
  meta: {
    orderNo: 30,
    icon: 'ant-design:setting-outlined',
    title: t('routes.system-log.title'),
    permissions: ['log'],
  },
  children: [
    {
      path: 'operation',
      name: 'Operation',
      meta: {
        title: t('routes.system-log.operation.title'),
        ignoreKeepAlive: true,
        permissions: ['log.read'],
      },
      component: () => import('/@/views/system-log/operation/index.vue'),
    },
    {
      path: 'operation/:id',
      name: 'LogDetail',
      meta: {
        hideMenu: true,
        title: t('routes.system-log.operation.detail.title'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system-log',
        permissions: ['log.read'],
      },
      component: () => import('/@/views/system-log/operation/LogDetail.vue'),
    },
  ],
};

export default systemLog;
