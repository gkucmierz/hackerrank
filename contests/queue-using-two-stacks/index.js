// https://www.hackerrank.com/challenges/queue-using-two-stacks

function processData(input) {
  let l = input.split(/\n/);
  l.shift();
  let q = [];
  l.map(l => {
    let o = l.split(/\s/);
    if (o[0] === '1') {
      q.push(o[1]);
    } else if (o[0] === '2') {
      q.shift();
    } else if (o[0] === '3') {
      console.log(q[0]);
    }
  });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
