interface LogEntity {
  id: number;
  module: string;
  content: string;
  userId: number;
  successful: string;
  request: string;
  response?: string;
  error?: string;
  cost: number;
  logTime: string;
}

export default LogEntity;
