// Unintentional assignment
var x;
if (x = 0) {
    var b = 1;
}

// Practical example that is similar to an error
var setHeight = function (someNode) {
  do {
      someNode.height = "100px";
  } while (someNode = someNode.parentNode);
}