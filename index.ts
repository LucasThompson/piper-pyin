import {
  WebWorkerService,
  countingIdProvider
} from 'piper-js/web-worker';
import * as pYinWorker from 'worker-loader?inline&fallback=false!./worker-server.js';

export const createService = () => new WebWorkerService(
  new pYinWorker(),
  countingIdProvider(0)
);

export default createService;