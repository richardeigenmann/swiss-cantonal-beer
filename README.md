# SwissCantonalBeer

This is a little project to showcase Angular. It is not meant as
a serious compendium of Swiss Beers.

See the page live here:

<https://richardeigenmann.github.io/swiss-cantonal-beer/>

I have turned this project into a build, break, fix and refactor workshop tutorial:

<https://github.com/richardeigenmann/swiss-cantonal-beer/blob/main/workshop/workshop.md>

## Beer

While coding this app I discovered a much more comprehensive and serious website. Check it out here: <https://ilovebeer.ch/de>

## The interesting parts of the application

### Background image

The background image that was created by Google Gemini is attached to the main `styles.css` file. Since it makes reading the `beer-list` component difficult, the `beer-list.css` has a semi opaque background color of `background-color: rgba(255, 255, 255, 0.7);`

### The source of the cantons

I created an array of canton objects with 2-char code, the name in German and a url
to the canton flag which is on Wikipedia.

This list is available in the `canton-service.ts` Angular Service. The CantonService is an
`@Injectable` so that it can be Dependency Injected into any components that needs it like the
`app.ts` component.

The list array is wrapped in an Angular Signal which is an ideomatic Angular way to
handle change detection is the underlying data and keep all views refreshed.

### The source of the beers

I asked Gemini to pull togethe a list of cantons and the beers that are produced there.
It did a reasonably good job.

Again I wrapped the data into an Angular Signal which is available for Dependency Injection.
Here the `beer-list.ts` components wants to work with this data.

### Selecting a canton

Sind the plain HTML dropdown box can't be styled attractively and in particular doesn't
support cantonal flags in the selection I opted for the Angular-Material `mat-form-field`
and 'mat-select' tools.

When the user makes a selection in the dropdown the
`(selectionChange)="onSelectionChange($event.value)` function is called. Inside the `app.ts`
code this updates the `selectedCanton` variable. Since this is bound to the `beer-list.ts`
component the Angular Change Detection system is invoked which makes the beer-list component
respond to the changed canton.

### Beer

Drinking Swiss Beers might be the most interesting thing here.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Publish to Github

```bash
ng build --configuration production --base-href "https://richardeigenmann.github.io/swiss-cantonal-beer/"
ngh --dir dist/swiss-cantonal-beer/browser
```

## Acknowledgements

I used Gemini to help me writing this app. It also created the Swiss Flag beer glass image.

The canton flags are coming from Wikipedia.

The images of the beers are linked to the original websites and were found with a quick google.
An obvious to-do for this app is to invest in primary research and taste each beer and take
a personal photo of each beer!
