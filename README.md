# angular-amazing-app

An amazing app, now with Angular.

## About the project

Project developed with Angular, RxJs and Typescript.
The purpose of this project is to apply the knowledge acquired with Angular's courses.

## Fold structure

### root
<pre>
|-- src  
    |-- app  
    |-- assets
    |-- environments
    |-- stories  
    
</pre>
   
### app

<pre>

|-- favorites  
    |-- favorites-modal  
        |-- favorites-item-list  
        |-- favorite-search-bar  
|-- home
    |-- header
        |-- price-filter
        |-- search-bar
        |-- sort
        |-- header.*.*
    |-- items-list  
        |-- item-card  
    |-- home.*.*  
|-- item-detai-page  
    |-- item-detail  
|-- services  
app.*.*  

</pre>

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
