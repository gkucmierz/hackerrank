// https://www.hackerrank.com/challenges/balanced-brackets

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

function isBalanced(s) {
    let last;
    while (1) {
        last = s.replace(/(\{\})|(\(\))|(\[\])/g, '');
        if (last === s) {
            break;
        }
        s = last;
    }
    return s === '' ? 'YES' : 'NO';
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var s = readLine();
        var result = isBalanced(s);
        process.stdout.write("" + result + "\n");
    }

}
