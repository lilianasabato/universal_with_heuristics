export interface IOra {
  text: string;
  successText: string;
  failText: string;
}

export interface IDictOra {
  [dict: string]: IOra;
}
