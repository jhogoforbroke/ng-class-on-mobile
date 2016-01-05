'use strict';

angular
  .module('ngClassOnMobile')
  .directive('ngClassOnMobile', ngClassOnMobile);

ngClassOnMobile.$inject = ['$window'];

function ngClassOnMobile($window) {
  var directive = {
    restrict: 'A',
    link: link,
    scope: {
    }
  };

  return directive;

  function link(scope, element, attrs) {
  }

};

