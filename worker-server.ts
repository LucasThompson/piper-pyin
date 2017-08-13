import {WebWorkerServer} from 'piper-js/web-worker';
import {EmscriptenSynchronousService, EmscriptenModule} from 'piper-js/Emscripten';

// need to use dom definitions in tsconfig,
// so have to bodge an importScripts definition.
// also declare global which comes in after import scripts
declare const PYinModule: () => EmscriptenModule;
declare function importScripts(path: string): void;

importScripts('pyin.asm.umd.js'); // Provides PYinModule, without bundling it with webpack
new WebWorkerServer(
  self as any,
  new EmscriptenSynchronousService(PYinModule())
);