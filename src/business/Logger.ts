class Logger {
  logger: Function;
  constructor(logger: Function) {
    this.logger = logger;
  }

  header(type: string): string {
    return `#### ${type} ####`;
  }

  footer(type: string): string {
    let footer = '########';
    for (let i = 0; i < type.length; i++) {
      footer += '#';
    }
    return footer;
  }

  info(message: string): void {
    this.logger(this.header('INFO') + message);
  }

  error(message: string): void {
    this.logger(this.header('ERROR') + message);
  }

  jsonStringify(message: string, json: unknown): void {
    this.info(message + JSON.stringify(json));
  }
}

const logFunction = console.log;

export default new Logger(logFunction);
