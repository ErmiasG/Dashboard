# dashboard

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

## Development
Install `yo`, `grunt-cli`, `bower`, `generator-angular` and `generator-karma`:
```
npm install -g grunt-cli bower yo generator-karma generator-angular
```
### Route
Generates a controller and view, and configures a route in `app/scripts/app.js` connecting them.

Example:
```bash
yo angular:route myroute
```
Produces `app/scripts/controllers/myroute.js`:
```javascript
angular.module('myMod').controller('MyrouteCtrl', function ($scope) {
  // ...
});
```

Produces `app/views/myroute.html`:
```html
<p>This is the myroute view</p>
```
Configures a route in `app/scripts/app.js` connecting them.
```javascript
.when('/myroute', {
  templateUrl: 'views/myroute.html',
  controller: 'MyrouteCtrl',
  controllerAs: 'myroute'
})
```
Generates test `test/spec/controllers/myroute.js`:

```javascript
describe('Controller: MyrouteCtrl', function () {
  // ...
}
```
For more AngularJS generator see https://github.com/yeoman/generator-angular.
