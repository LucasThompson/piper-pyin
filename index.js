import {
  WebWorkerService,
  countingIdProvider
} from 'piper-js/web-worker';
import pYinWorker from 'worker-loader!./worker-server.js';

const test = new WebWorkerService(new pYinWorker(), countingIdProvider(0));

