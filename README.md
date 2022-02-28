# ShopApp - NGRX Store Management Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Functionality Developed

1. Invoke Product API using NgRX Effect
2. Fecth Data from API, On success save data in angular store and display in Product List page
3. On click of Add to Cart button in Product List page, update app state and show cart item count in header 
4. On click of Cart Icon go to cart list page, show items added in the cart using angular state
5. on click of  "Remove from Cart" button remove the item from cart and updte app state accordingly.

For API, Express app has been created inside project root folder. /express-backend

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
