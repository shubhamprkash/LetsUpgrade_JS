// 1.Program to search for a particular character in a string

function search(str, item) {
    var n = str.indexOf(item);
    console.log(`"${item}" is present at ${n} position in the string "${str}"`);
}
search("letsupgrade", "p");

// 2.Program to convert minutes to seconds

function convert(min) {
    return min * 60;
}
let sec = convert(60);
console.log(sec);

// 3.Program to search for a element in a array of strings

function search(str, item) {
    var n = str.indexOf(item);
    console.log(`"${item}" is present at ${n} position in the array.`);
}
let arr = ["Shubham", "Denny", "Prakash", "LetsUpgrade", "Sarthak"];
search(arr, "Shubham");

// 4.Program to display only elements containing 'a' in them from a array

function dis(str) {
    str.forEach(element => {
        if (element.includes("a") === true) {
            console.log(element);
        }
    });
}
var arr = ["aada", "ddd", "rra", "sss"];
dis(arr);


// 5. Print an array in reverse order.

var arr = ["aada", "ddd", "rra", "sss"];
console.log(arr.reverse());
