import {WebWorkerServer} from 'piper-js/web-worker';
import {EmscriptenSynchronousService, EmscriptenModule} from 'piper-js/Emscripten';
import * as PYinModule from './pyin.asm.umd';

// importScripts('pyin.asm.umd.js'); // Provides PYinModule, without bundling it with webpack
new WebWorkerServer(
  self,
  new EmscriptenSynchronousService(PYinModule())
);