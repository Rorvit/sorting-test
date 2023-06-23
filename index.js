'use strict';
exports.__esModule = true;
let fs_1 = require('fs');
let external_sorting_1 = require('external-sorting');
(0, external_sorting_1['default'])({
  input: (0, fs_1.createReadStream)('input.txt'),
  output: (0, fs_1.createWriteStream)('file.txt'),
  tempDir: __dirname,
  maxHeap: 500,
})
  .asc()
  .then(function () {
    console.log('done');
  })
  ['catch'](console.error);
