// moduleName: name of your npm module
// @params: you should explicit if you're passing parameters

var moduleName = (function moduleName() {

  "use strict";

  // YOUR PRETTY JS CODE THAT WILL CHANGE THE WORLD
  // return whateverFunction;

})( this );

if ( typeof module !== "undefined" && module.exports ) {
  // export for use in Node
  module.exports.moduleName = function( @params ) {
    return moduleName( @params );
  };
} else if ( typeof define !== "undefined" && define.amd ) {
  // export for use in AMD
  define([], function( @params ) {
    return moduleName( @params );
  });
}
