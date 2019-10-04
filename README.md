## Hello SHUI (Basic)


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

The SHUI (v1.2.2) components are included and ready to use in the entire app.


## Terminal Commands

- Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
- Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.


---


## Default SHUI Functions


### Navigate Between Pages

- Use the `navigate('...')` function for switching pages, then use the `page="..."` attribute to assigning a component to a page.
If the component is hidden when loading the page, add the `hidden` to it as well (drawers and modals don't need the hidden attribute):

```html
<!-- this button will trigger navigation to the viewer page -->
<sh-button (click)="navigate('viewer')"> </sh-button>

<!-- this card will be hidden if current page is not home  -->
<sh-card page="home"> </sh-card>

<!-- this card will be hidden by default and shown if the user navigates to the viewer page -->
<sh-card page="viewer" hidden> </sh-card>
```


### Show, Hide and Switch States

- Use the `show('...')`, `hide('...')` and `switch('...')` functions for managing states, and then use `state="..."` to assign a state to a component, e.g.:

```html
<!-- this button will show the myTable state -->
<sh-button (click)="show('myTable')"> </sh-button>

<!-- this button will show the myCard state and hide the myTable state -->
<sh-button (click)="show('myCard'); hide('myTable')"> </sh-button>

<!-- this button will switch the myTable state (if currently shown it will be hidden, and vice-versa) -->
<sh-button (click)="switch('myTable')"> </sh-button>

<!-- states can be assigned to any component. -->
<sh-table state="myTable"> </sh-table>
<sh-card state="myCard"> </sh-card>
```


### Hide Components

- Use the `hidden` attribute for hiding components, e.g.:

```html
<!-- this card is hidden -->
<sh-card hidden> </sh-card>
```


### Change Theme

- Use the `switchTheme()` function for switching themes, e.g.:

```html
<!-- clicking on this button will switch the theme -->
<sh-button (click)="switchTheme()"> </sh-button>
```