// https://www.hackerrank.com/challenges/repeated-string

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var s = readLine();
    var n = parseInt(readLine());

    let c = s => (s.match(/a/g) || []).length;
    let sc = c(s);
    let r = n % s.length;
    console.log((n-r)/s.length*sc+c(s.substr(0,r)));
}
