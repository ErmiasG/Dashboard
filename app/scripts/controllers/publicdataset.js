'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:PublicdatasetCtrl
 * @description
 * # PublicdatasetCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('PublicdatasetCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    this.publicdatasetsAll = ['1000 Cannabis Genomes Project','Chicago Crime Data',
                           'Bay Area Bike Share Trips Data','GDELT Books Corpus','GitHub Data',
                           'Hacker News','Healthcare Common Procedure Coding System (HCPCS) Level II',
                           'IRS 990 Data','Major League Baseball','Medicare',
                           'NOAA GHCN Weather','NOAA GSOD Weather','NYC 311 Service Requests',
                           'NYC Citi Bike Trips','NYC TLC Trips','NYC Tree Census',
                           'NYPD Motor Vehicle Collisions','Open Images','San Francisco 311 Service Requests Data',
                           'San Francisco Fire Department Service Calls Data','San Francisco Police Reports Data',
                           'San Francisco Street Trees Data','Stack Overflow','USA Bureau of Labor Statistics',
                           'United States Census Data','United States Census Bureau International Data','USA Disease Data',
                           'USA Names Data','Sample Tables', 'USA Names Data 3','Sample Tables 2',
                           'Census Data','Bureau International Data','Disease Data',
                           'Bike Share Trips Data','Books Corpus','GitHub code Data'];

    this.publicdatasetsRate = ['1000 Cannabis Genomes Project','Chicago Crime Data',
                            'Bay Area Bike Share Trips Data','GDELT Books Corpus','GitHub Data',
                            'Hacker News','Healthcare Common Procedure Coding System (HCPCS) Level II',
                            'IRS 990 Data','Major League Baseball','Medicare'];

    this.publicdatasetsDownload = ['San Francisco Fire Department Service Calls Data','San Francisco Police Reports Data',
                           'San Francisco Street Trees Data','Stack Overflow','USA Bureau of Labor Statistics',
                           'United States Census Data','United States Census Bureau International Data','USA Disease Data',
                           'USA Names Data','Sample Tables'];

    this.publicdatasetsNew = ['IRS 990 Data','Major League Baseball','Medicare',
                            'NOAA GHCN Weather','NOAA GSOD Weather','NYC 311 Service Requests',
                            'NYC Citi Bike Trips','NYC TLC Trips','NYC Tree Census',
                            'NYPD Motor Vehicle Collisions'];

    this.init = function () {
      $('.keep-open').on({
          "shown.bs.dropdown": function() { $(this).attr('closable', false); },
          "click":             function() { },
          "hide.bs.dropdown":  function() { console.log($(this).attr('closable') == 'true'); return $(this).attr('closable') == 'true'; }
      });

      $('.keep-open #dLabel').on({
        "click": function() {
          console.log('foo');
          $(this).parent().attr('closable', true );
        }
      });
    }
    this.init();
  });
