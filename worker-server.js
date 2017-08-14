import {WebWorkerServer} from 'piper-js/web-worker';
import {EmscriptenSynchronousService, EmscriptenModule} from 'piper-js/Emscripten';
import * as PYinModule from './pyin.asm.umd';

new WebWorkerServer(
  self,
  () => new EmscriptenSynchronousService(PYinModule())
);