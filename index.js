import {
  WebWorkerService,
  countingIdProvider
} from 'piper-js/web-worker';
import pYinWorker from 'worker-loader!./worker-server.js';

export const createService = () => new WebWorkerService(
  new pYinWorker(),
  countingIdProvider(0)
);

export default createService;