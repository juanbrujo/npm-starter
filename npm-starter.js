// moduleName = name of your npm module

var moduleName = (function moduleName() {

  "use strict";

  // YOUR PRETTY JS CODE THAT WILL CHANGE THE WORLD
  // return whatever;

})( this );

if ( typeof module !== "undefined" && module.exports ) {
  // export for use in Node
  module.exports.moduleName = function ( @params ) {
    return moduleName( @params );
  };
} else if ( typeof define !== "undefined" && define.amd ) {
  // export for use in AMD
  define([], function ( @params ) {
    return moduleName( @params );
  });
}
