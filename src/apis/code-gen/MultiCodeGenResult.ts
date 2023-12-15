import CodeGenResult from './CodeGenResult';

interface MultiCodeGenResult {
  tableName: string;
  codeGenResults: CodeGenResult[];
}

export default MultiCodeGenResult;
