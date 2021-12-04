export interface IExtension {
  write: Function;
  read: Function;
  encoding: BufferEncoding;
}

export interface IFileExtension {
  json: IExtension;
  txt: IExtension;
}
