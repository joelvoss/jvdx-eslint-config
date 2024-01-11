var thing = function() /*<NBSP>*/{
  return 'test';
}

var thing = function( /*<NBSP>*/){
  return 'test';
}

var thing = function /*<NBSP>*/(){
  return 'test';
}

var thing = function /*<Ogham Space Mark>*/(){
  return 'test';
}

var thing = function() {
  return 'test'; /*<ENSP>*/
}

var thing = function() {
  return 'test'; /*<NBSP>*/
}

var thing = function() {
  // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

var thing = function() {
  return / <NBSP>regexp/;
}

/*eslint-env es6*/
var thing = function() {
  return `template <NBSP>string`;
}