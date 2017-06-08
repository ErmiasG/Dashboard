'use strict';

describe('Filter: highlight', function () {

  // load the filter's module
  beforeEach(module('dashboardApp'));

  // initialize a new instance of the filter before each test
  var highlight;
  beforeEach(inject(function ($filter) {
    highlight = $filter('highlight');
  }));

  it('should return the input highlighted', function () {
    var text = 'angularjs @someone';
    expect(highlight(text)).toBe('angularjs <span class="highlighted">@someone</span>');
  });

});
