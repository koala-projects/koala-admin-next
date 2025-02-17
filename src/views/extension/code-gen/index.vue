<script lang="ts" setup>
  import { ref, unref } from 'vue';

  import { Steps, Step } from 'ant-design-vue';

  import { PageWrapper } from '/@/components/Page';
  import { useLoading } from '/@/components/Loading';

  import {
    codeGenPreview as codeGenPreviewApi,
    codeGenDownload,
    MultiCodeGenResult,
  } from '/@/apis/code-gen';

  import CodeGenDatabaseForm from './CodeGenDatabaseForm.vue';
  import CodeGenTableForm from './CodeGenTableForm.vue';
  import CodeGenTemplateGroupForm from './CodeGenTemplateGroupForm.vue';
  import CodeGenPreview from './CodeGenPreview.vue';

  const current = ref(0);
  const initTemplateGroupForm = ref(false);
  const initPreview = ref(false);

  const databaseId = ref<Nullable<number>>(null);
  const tables = ref<string[]>([]);
  const templateGroupId = ref<Nullable<number>>(null);
  const preview = ref<Nullable<MultiCodeGenResult[]>>(null);

  function handleDatabase(data: { databaseId: number }) {
    current.value++;
    databaseId.value = data.databaseId;
  }

  function handleStepPrev() {
    current.value--;
  }

  function handleTables(data: { tables: string[] }) {
    current.value++;
    tables.value = data.tables;
    initTemplateGroupForm.value = true;
  }

  const [openFullLoading, closeFullLoading] = useLoading({
    tip: '代码生成中...',
  });

  async function handleTemplateGroup(data: { templateGroupId: number }) {
    templateGroupId.value = data.templateGroupId;
    openFullLoading();
    try {
      preview.value = await codeGenPreviewApi({
        databaseId: unref(databaseId)!,
        tables: unref(tables),
        templateGroupId: unref(templateGroupId)!,
      });
      current.value++;
      initPreview.value = true;
    } finally {
      closeFullLoading();
    }
  }

  async function handleDownload() {
    openFullLoading();
    window.open(
      await codeGenDownload({
        databaseId: unref(databaseId)!,
        tables: unref(tables),
        templateGroupId: unref(templateGroupId)!,
      }),
    );
    closeFullLoading();
  }

  function handleRedo() {
    current.value = 0;
    initTemplateGroupForm.value = false;
    initPreview.value = false;
  }
</script>
<template>
  <PageWrapper
    title="代码生成"
    contentBackground
    content="跟随步骤将数据库表生成为代码"
    contentClass="p-4"
    contentFullHeight
  >
    <div class="step-form-form">
      <steps :current="current">
        <step title="选择数据库" />
        <step title="选择数据表" />
        <step title="选择模板组" />
        <step title="预览" />
      </steps>
    </div>
    <div class="mt-5">
      <code-gen-database-form @next="handleDatabase" v-show="current === 0" />
      <code-gen-table-form
        :database-id="databaseId!"
        @prev="handleStepPrev"
        @next="handleTables"
        v-show="current === 1"
        v-if="current >= 1"
      />
      <code-gen-template-group-form
        v-show="current === 2"
        @prev="handleStepPrev"
        @next="handleTemplateGroup"
        v-if="initTemplateGroupForm"
      />
      <code-gen-preview
        :preview="preview!"
        v-show="current === 3"
        @download="handleDownload"
        @redo="handleRedo"
        v-if="initPreview"
      />
    </div>
  </PageWrapper>
</template>
<style lang="less" scoped>
  .step-form-content {
    padding: 24px;
    background-color: @component-background;
  }

  .step-form-form {
    width: 750px;
    margin: 0 auto;
  }
</style>
