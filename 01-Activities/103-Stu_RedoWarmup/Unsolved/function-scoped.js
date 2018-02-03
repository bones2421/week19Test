var name = "Nick";

var tinyize = function (name) {
  var myName = 'Tiny ' + name + '!';

  return myName;
};

name = tinyize('Rick');
console.log(name);

for (var i = 0; i < 5; i++) {
  (function(i){
    setTimeout(function () {
      console.log(i);
    }, 100);
  })(i)
}
