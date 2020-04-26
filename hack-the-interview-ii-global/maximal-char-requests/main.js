'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getMaxCharCount' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. 2D_INTEGER_ARRAY queries
 */

const getMaxCharCount = (s, qs) => {
  const lc = s.toLowerCase();
  const len = lc.length;
  const cnts = {};
  const letters = [...'abcdefghijklmnopqrstuvwxyz'];
  
  letters.map(ch => {
    // const res = [];
    const res = new Uint32Array(len);
    let cnt = 0;
    for (let i = 0; i < len; ++i) {
      if (lc[i] === ch) {
        ++cnt;
      }
      res[i] = cnt;
    }
    cnts[ch] = res;
  });
  
  return qs.map(q => {
    let win = {};
    letters.map(ch => {
      const cnt = cnts[ch][q[1]] - (q[0] === 0 ? 0 : cnts[ch][q[0]-1]);
      if (cnt >= 1) {
        win = {ch, cnt};
      }
    });
    return win.cnt;
  });
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const q = parseInt(readLine().trim(), 10);

    let query = Array(q);

    for (let i = 0; i < q; i++) {
        query[i] = readLine().replace(/\s+$/g, '').split(' ').map(queryTemp => parseInt(queryTemp, 10));
    }

    const ans = getMaxCharCount(s, query);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}
