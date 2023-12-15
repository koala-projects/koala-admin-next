import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '岗位代码',
    dataIndex: 'code',
  },
  {
    title: '岗位名称',
    dataIndex: 'name',
  },
  {
    title: '岗位描述',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'code',
    label: '岗位代码',
    component: 'Input',
    colProps: {
      xl: 12,
      xxl: 8,
    },
  },
  {
    field: 'name',
    label: '岗位名称',
    component: 'Input',
    colProps: {
      xl: 12,
      xxl: 8,
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'code',
    label: '岗位代码',
    component: 'Input',
  },
  {
    field: 'name',
    label: '岗位名称',
    component: 'Input',
  },
  {
    field: 'description',
    label: '岗位描述',
    component: 'Input',
  },
  {
    field: 'sortIndex',
    label: '排序索引',
    component: 'InputNumber',
  },
];
