import { ICodeMessage } from '../interfaces/CodeMessages';
import { IError } from '../interfaces/Error';

class NotFound extends Error implements IError {
  code: number;
  statusCode: number;

  constructor(error: ICodeMessage) {
    const { message, code } = error;
    super(message);
    this.name = 'Não foi encontrado: ';
    this.code = code;
    this.statusCode = 404;
  }

  toString(): string {
    return `Código: ${this.code}\n${this.name}${this.message}`;
  }
}

export default NotFound;
