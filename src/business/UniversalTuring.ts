import { ICodeMessage } from '../interfaces/CodeMessages';
import { errorHandler } from '../middlewares/Error';
import { oraPromise } from 'ora';
import InputBusiness from './Input';
import ORA_MESSAGES from '../constants/Ora';

class UniversalTuring {
  async init(): Promise<void> {
    while (true) {
      try {
        await this.run();
      } catch (error) {
        errorHandler(error);
      }
    }
  }
  async run(): Promise<void> {
    const inputBusiness = new InputBusiness();

    await oraPromise(inputBusiness.input, ORA_MESSAGES.INPUT);
  }
}

export default new UniversalTuring();
