import FileStream from './File';
import { ITuring } from '../interfaces/Turing';
import TuringBusiness from './Turing';

class Input {
  private file: string;
  private path: string;

  constructor() {
    [this.file] = process.argv;
    this.path = process.cwd();
  }

  async read(): Promise<string> {
    const fileStream = new FileStream();

    const fileExtension = this.file.split['.'][1];

    const rawTuring = await fileStream.read({
      path: this.file,
      fileExtension
    });

    return rawTuring;
  }

  parseTuring(rawTuring: string): ITuring {
    const turingBusiness = new TuringBusiness();
    const turing = turingBusiness.parse(rawTuring);
    return turing;
  }

  async input(): Promise<ITuring> {
    const rawTuring = await this.read();
    const turing = this.parseTuring(rawTuring);

    return turing;
  }
}

export default Input;
