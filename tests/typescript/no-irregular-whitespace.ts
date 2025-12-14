var thing = function() /*<NBSP>*/{
  return 'test';
}

var thing2 = function( /*<NBSP>*/){
  return 'test';
}

var thing3 = function /*<NBSP>*/(){
  return 'test';
}

var thing4 = function /*<Ogham Space Mark>*/(){
  return 'test';
}

var thing5 = function() {
  return 'test'; /*<ENSP>*/
}

var thing6 = function() {
  return 'test'; /*<NBSP>*/
}

var thing7 = function() {
  // Description <NBSP>: some descriptive text
}

/*
Description <NBSP>: some descriptive text
*/

var thing8 = function() {
  return / <NBSP>regexp/;
}

var thing9 = function() {
  return `template <NBSP>string`;
}