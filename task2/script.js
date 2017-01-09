"use strict"

// задача 1

var arr = [2, 5, 8, 4, 1, 12];
arr.sort(function (a, b) {
	return a - b
});

// задача 2

var text = "The quick brown fox jumps over the lazy dog";
var list = text.split(" ");

function words(list) {
	return list.length >= 4;
}
// задача 3


// задача 4


// задача 5

var sessionKey = getCookie("samplename");
if (sessionKey === null) {
	alert("cookie does not exist");
} else {
	alert("cookie exists");
}