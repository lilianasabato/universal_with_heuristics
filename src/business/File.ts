import * as _fs from 'fs';
import { isEmpty } from 'lodash';
import { IFileExtension, IExtension } from '../interfaces/FileExtension';
import FILE_EXTENSIONS from '../constants/FileExtension';
import BusinessError from '../Errors/BusinessError';
import CODE_MESSAGES from '../constants/CodeMessages';

const fs = _fs.promises;

export default class FileStream {
  private FILE_EXTENSIONS: IFileExtension;
  private rootPath: string;

  constructor() {
    this.FILE_EXTENSIONS = FILE_EXTENSIONS;
    this.rootPath = '';
  }

  setPath(path: string): string {
    return this.rootPath + path;
  }

  checkFileExtension(extension: keyof IFileExtension): IExtension {
    if (isEmpty(this.FILE_EXTENSIONS[extension])) {
      throw new BusinessError(CODE_MESSAGES.FILE_EXTENSION_NOT_SUPPORTED);
    }
    return FILE_EXTENSIONS[extension];
  }

  async read({ path, fileExtension }: { path: string; fileExtension: keyof IFileExtension }) {
    const { read, encoding } = this.checkFileExtension(fileExtension);
    const buffer = await fs.readFile(this.setPath(path), encoding);
    return read(buffer);
  }

  async write({
    path,
    fileExtension,
    object
  }: {
    path: string;
    fileExtension: keyof IFileExtension;
    object: unknown;
  }) {
    const { write } = this.checkFileExtension(fileExtension);
    await fs.writeFile(this.setPath(path), write(object));
  }
}
