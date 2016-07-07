'use strict';

angular
  .module('ngClassOnMobile')
  .directive('ngClassOnMobile', ngClassOnMobile);

ngClassOnMobile.$inject = ['ngClassOnMobile.deviceCheckService'];

function ngClassOnMobile(deviceCheckService) {
  var directive = {
    restrict: 'A',
    link: link,
    scope: {
      classToAdd: '@',
      classToRemove: '@',
      delayToApply: '=',
      removeCssInline: '='
    }
  };

  return directive;

  function link(scope, element, attrs) {

    if (deviceCheckService.isAMobileDevice()) {

      setTimeout(function(){

        scope.classesToAdd = scope.classToAdd.split(', ').map(function(x){ return x.trim(); });
        scope.classesToRemove = scope.classToRemove.split(', ').map(function(x){ return x.trim(); });

        scope.classesToRemove.forEach(function(x){
          element.removeClass(x);
        });

        scope.classesToAdd.forEach(function(x){
          element.addClass(x);
        });

        if (scope.removeCssInline) {
          element.removeAttr('style');
        }

      }, scope.delayToApply || 0);

    }

  }

};

