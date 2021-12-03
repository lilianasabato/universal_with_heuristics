import { ICodeMessage } from '../interfaces/CodeMessages';
import logger from '../business/Logger';

export function errorHandler(error: ICodeMessage) {
  logger.error(error.toString());
}
