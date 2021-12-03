export interface ICodeMessage {
  message: string;
  code: number;
}

export interface IDictCodeMessage {
  [erro: string]: ICodeMessage;
}
