<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { useModal } from '/@/components/Modal';
  import { listDuty, deleteDuty } from '/@/apis/duties';
  import DutyModal from './DutyModal.vue';
  import { columns, searchFormSchema } from './duty.data';

  const [register, { reload }] = useTable({
    title: '岗位列表',
    columns: columns,
    actionColumn: {
      width: 120,
      title: '操作',
      dataIndex: 'action',
      fixed: undefined,
    },
    api: listDuty,
    showIndexColumn: false,
    bordered: true,
    showTableSetting: true,
    canResize: false,
    useSearchForm: true,
    formConfig: {
      labelWidth: 100,
      schemas: searchFormSchema,
    },
  });
  const [registerModal, { openModal }] = useModal();
  function handleCreate() {
    openModal(true, {
      isUpdate: false,
    });
  }
  function handleEdit(record: Recordable) {
    openModal(true, {
      record,
      isUpdate: true,
    });
  }
  async function handleDelete(record: Recordable) {
    await deleteDuty(record.id);
    reload();
  }
  function handleSuccess() {
    reload();
  }
</script>
<template>
  <div>
    <basic-table @register="register">
      <template #toolbar>
        <a-button v-auth="'duty.create'" type="primary" @click="handleCreate"> 新增岗位 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <table-action
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑',
                auth: 'duty.update',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                tooltip: '删除',
                color: 'error',
                auth: 'duty.delete',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </basic-table>
    <duty-modal @register="registerModal" @success="handleSuccess" />
  </div>
</template>
