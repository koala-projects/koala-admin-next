import type SimpleCodeResult from './SimpleCodeResult';

export default interface PreviewResponse {
  [table: string]: SimpleCodeResult[];
}
