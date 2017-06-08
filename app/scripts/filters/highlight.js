'use strict';

/**
 * @ngdoc filter
 * @name dashboardApp.filter:highlight
 * @function
 * @description
 * # highlight
 * Filter that highlight @username.
 */
angular.module('dashboardApp')
  .filter('highlight', function () {
    return function(text) {
      var matches = text.match(/@\w+/g);
      if (matches) {
        text = text.replace(matches, '<span class="highlighted">'+matches+'</span>');
      }
      return text;
    };
  });
