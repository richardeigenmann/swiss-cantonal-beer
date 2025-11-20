# SwissCantonalBeer

This is a little project to showcase Angular. It is not meant as
a serious compendium of Swiss Beers.

See the page live here:

<https://richardeigenmann.github.io/swiss-cantonal-beer/>

I have turned this project into a build, break, fix and refactor workshop tutorial:

<https://github.com/richardeigenmann/swiss-cantonal-beer/blob/main/workshop/workshop.md>

## Serious Websites

While coding this app I discovered a much more comprehensive and serious website. Check it out here: <https://ilovebeer.ch/de>

## The interesting parts of the application

### Components passing data around

The final application has the main app page interacting with 2 components. First
we have the dropdown that selects the Canton. This is passed back to the app.
The app component passes this down to the beer-list component which filters the
appropriate beers for the canton. The whole reactive thing is at the core of
Angular.

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

I asked Gemini to pull together a list of cantons and the beers that are produced there. It did a reasonably good job.

Again I wrapped the data into an Angular Signal which is available for Dependency Injection.
Here the `beer-list.ts` components wants to work with this data.

As the workshop points out the actual JSON with the beers should come from
a dynamic source like a Rest interface to a database. I simulated this by
pulling a raw JSON from this GitHub repo, pretending it to be a live service.

### Selecting a canton

Sind the plain HTML dropdown box can't be styled attractively and in particular doesn't
support cantonal flags in the selection I opted for the Angular-Material `mat-form-field`
and 'mat-select' tools.

When the user makes a selection in the dropdown the
`(selectionChange)="onSelectionChange($event.value)"` function is called. Inside the `app.ts`
code this updates the `selectedCanton` variable. Since this is bound to the `beer-list.ts`
component the Angular Change Detection system is invoked which makes the beer-list component
respond to the changed canton.

### Beer

The above being said, drinking Swiss Beers might be the most interesting thing here.

## Development server

To start a local development server, run:

```bash
ng serve
ng serve -o
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files. The `-o` option tells the OS to open the browser for you.

## Publish to Github

```bash
ng build --configuration production --base-href "https://richardeigenmann.github.io/swiss-cantonal-beer/"
ngh --dir dist/swiss-cantonal-beer/browser
```

## What I glossed over

* Authentication: A real application might have to deal with user authorisation
and priviledge management vs. the back end
* Read only: This app doesn't have any sort of maintenance function and indeed
doesn't have a backend that can handle updates.
* Large Data considerations: A real database might have a large number of beers
and pulling all data to the browser and filtering there might have a memory and
performance penalty. One might have to consider doing the filtering at the server
side. But that has the trade-off of server costs.
* Backend: There is none here (well the GitHub static resource serving is technically one but I don't think this counts)
* Testing: I didn't bother with component tests or End-2-End tests
* Security: Is not really important with this demo application

## Acknowledgements

I used Gemini to help me writing this app. It also created the Swiss Flag beer glass image.

The canton flags come from Wikipedia.

The images of the beers are linked to the original websites and were found with a quick google.
An obvious to-do for this app is to invest in primary research and taste each beer and take
a personal photo of each beer! (And **not** of the drinker after a heavy night of "field research"...)

## Updating

```bash
ng update
npm outdated
npm update
ng test
```
