import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const system: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    orderNo: 20,
    icon: 'ant-design:setting-outlined',
    title: t('routes.system.title'),
  },
  children: [
    {
      path: 'user',
      name: 'User',
      meta: {
        title: t('routes.system.user.title'),
        ignoreKeepAlive: false,
        permissions: ['user.read'],
      },
      component: () => import('/@/views/system/user/index.vue'),
    },
    {
      path: 'role',
      name: 'Role',
      meta: {
        title: t('routes.system.role.title'),
        ignoreKeepAlive: true,
        permissions: ['role.read'],
      },
      component: () => import('/@/views/system/role/index.vue'),
    },
    {
      path: 'department',
      name: 'Department',
      meta: {
        title: t('routes.system.department.title'),
        ignoreKeepAlive: true,
        permissions: ['department.read'],
      },
      component: () => import('/@/views/system/department/index.vue'),
    },
    {
      path: 'dictionary',
      name: 'Dictionary',
      meta: {
        title: t('routes.system.dictionary.title'),
        ignoreKeepAlive: true,
        permissions: ['dictionary.read'],
      },
      component: () => import('/@/views/system/dictionary/index.vue'),
    },
    {
      path: 'log',
      name: 'Log',
      meta: {
        title: t('routes.system.log.title'),
        ignoreKeepAlive: true,
      },
      component: () => import('/@/views/system/log/index.vue'),
    },
    {
      path: 'log/:id',
      name: 'LogDetail',
      meta: {
        hideMenu: true,
        title: t('routes.system.log.detail.title'),
        ignoreKeepAlive: true,
        showMenu: false,
        currentActiveMenu: '/system/log',
      },
      component: () => import('/@/views/system/log/LogDetail.vue'),
    },
  ],
};

export default system;
