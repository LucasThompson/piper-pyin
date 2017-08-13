import {
  WebWorkerService,
  countingIdProvider
} from 'piper-js/web-worker';

const MyWorker = require('worker-loader!./worker-server.js');

const test = new WebWorkerService(new MyWorker(), countingIdProvider(0));

