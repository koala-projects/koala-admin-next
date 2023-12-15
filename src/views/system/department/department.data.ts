import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '部门名称',
    dataIndex: ['data', 'name'],
  },
  {
    title: '部门备注',
    dataIndex: ['data', 'description'],
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'parentId',
    label: '上级部门',
    component: 'TreeSelect',
    componentProps: {
      fieldNames: {
        label: 'name',
        key: 'id',
        value: 'id',
      },
      getPopupContainer: () => document.body,
    },
  },
  {
    field: 'name',
    label: '部门名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'description',
    label: '部门备注',
    component: 'InputTextArea',
  },
];
