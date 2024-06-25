export default class UtilService {
  maxTitleLength;
  maxBodyLength;
  nodeEnvironment;
  constructor() {
    this.maxTitleLength = 120;
    this.maxBodyLength = 3500;
    this.nodeEnvironment = 'development';
  }
  development = () => {
    return this.nodeEnvironment === 'development';
  };
}
