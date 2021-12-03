import { ICodeMessage } from '../interfaces/CodeMessages';
import { IError } from '../interfaces/Error';

class BusinessError extends Error implements IError {
  code: number;
  statusCode: number;

  constructor(error: ICodeMessage) {
    const { message, code } = error;
    super(message);
    this.name = 'Erro ao executar maquina de turing: ';
    this.code = code;
    this.statusCode = 400;
  }

  toString(): string {
    return `Código: ${this.code}\n${this.name}${this.message}`;
  }
}

export default BusinessError;
