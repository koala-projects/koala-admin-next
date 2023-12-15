<script lang="ts" setup>
  import { ref } from 'vue';

  import { Tabs, TabPane, Row as ARow, Col as ACol } from 'ant-design-vue';

  import { CodeEditor } from '/@/components/CodeEditor';

  import { get, set } from 'lodash-es';

  import { MultiCodeGenResult } from '/@/apis/code-gen';

  const props = defineProps<{ preview: MultiCodeGenResult[] }>();

  const tableActiveKey = ref<number>(0);
  const codeActiveKey = ref<number>(0);

  const history = {};

  function handleTableChange(activeKey: string | number) {
    codeActiveKey.value = get(history, activeKey, 0);
  }

  function handleCodeChange(activeKey: string | number) {
    set(history, tableActiveKey.value, activeKey);
  }

  const emit = defineEmits(['download', 'redo']);

  async function redo() {
    emit('redo');
  }

  async function download() {
    emit('download');
  }
</script>
<template>
  <div>
    <tabs tab-position="left" v-model:activeKey="tableActiveKey" @change="handleTableChange">
      <tab-pane
        v-for="(multiResult, multiIndex) in props.preview"
        :key="multiIndex"
        :tab="multiResult.tableName"
      >
        <tabs tab-position="top" v-model:activeKey="codeActiveKey" @change="handleCodeChange">
          <tab-pane
            v-for="(result, codeIndex) in multiResult.codeGenResults"
            :key="codeIndex"
            :tab="result.filename"
          >
            <code-editor :value="result.content" readonly />
          </tab-pane>
        </tabs>
      </tab-pane>
    </tabs>
    <a-row justify="center">
      <a-col span="6"><a-button @click="download"> 下载 </a-button></a-col>
      <a-col span="6"><a-button type="primary" @click="redo"> 重新生成 </a-button></a-col>
    </a-row>
  </div>
</template>
