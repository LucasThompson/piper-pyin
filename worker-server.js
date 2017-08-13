import {WebWorkerServer} from 'piper-js/web-worker';
import {EmscriptenSynchronousService} from 'piper-js/Emscripten';
importScripts('pyin.asm.umd.js'); // Provides PYinModule, without bundling it with webpack
new WebWorkerServer(self, new EmscriptenSynchronousService(PYinModule()));