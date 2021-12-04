import { IFileExtension } from '../interfaces/FileExtension';
import ENCODING from './Encoding';

const FILE_EXTENSIONS: IFileExtension = {
  json: {
    write(obj: unknown) {
      return JSON.stringify(obj);
    },
    read(reader: string) {
      return JSON.parse(reader);
    },
    encoding: ENCODING['UTF-8']
  },
  txt: {
    write(obj: unknown) {
      return obj;
    },
    read(reader: string) {
      return reader;
    },
    encoding: ENCODING['UTF-8']
  }
};

export default FILE_EXTENSIONS;
