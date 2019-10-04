import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppComponent';

  ngAfterViewChecked() {
    console.log("Change detection detected");;
}

  // switch the current view (triggered by click)
  navigate(page) {
    var pageComponents = document.querySelectorAll("[page]");
    var i;
    for (i = 0; i < pageComponents.length; i++) {
      if (pageComponents[i].getAttribute("page") == page) {
        pageComponents[i].removeAttribute("hidden");
      } else {
        pageComponents[i].setAttribute("hidden", "true");
      }
    }
  }

  // show a state
  show(state) {
    var stateComponents = document.querySelectorAll("[state]");
    var i;
    for (i = 0; i < stateComponents.length; i++) {
      if (stateComponents[i].getAttribute("state") == state) {
        if (stateComponents[i].tagName == "SH-MODAL" || stateComponents[i].tagName == "SH-DRAWER") {
          stateComponents[i].setAttribute("visible", "true");
        } else {
          stateComponents[i].removeAttribute("hidden");
        }
      }
    }
  }

  // hide a state
  hide(state) {
    var stateComponents = document.querySelectorAll("[state]");
    var i;
    for (i = 0; i < stateComponents.length; i++) {
      if (stateComponents[i].getAttribute("state") == state) {
        if (stateComponents[i].tagName == "SH-MODAL" || stateComponents[i].tagName == "SH-DRAWER") {
          stateComponents[i].removeAttribute("visible");
        } else {
          stateComponents[i].setAttribute("hidden", "true");
        }
      }
    }
  }

  // switch a state
  switch(state) {
    var stateComponents = document.querySelectorAll("[state]");
    var i;
    for (i = 0; i < stateComponents.length; i++) {
      if (stateComponents[i].getAttribute("state") == state) {
        if (stateComponents[i].hasAttribute("hidden")) {
          if (stateComponents[i].tagName == "SH-MODAL" || stateComponents[i].tagName == "SH-DRAWER") {
            stateComponents[i].setAttribute("visible", "true");
          } else {
            stateComponents[i].removeAttribute("hidden");
          }
        } else {
          if (stateComponents[i].tagName == "SH-MODAL" || stateComponents[i].tagName == "SH-DRAWER") {
            stateComponents[i].removeAttribute("visible");
          } else {
            stateComponents[i].setAttribute("hidden", "true");
          }
        }
      }
    }
  }

  // switch themes
  switchTheme() {
    let htmlNode = (<HTMLElement>event.target).ownerDocument.documentElement;
    if (htmlNode.getAttribute('theme') === 'dark') {
      htmlNode.setAttribute('theme', 'light')
    } else {
      htmlNode.setAttribute('theme', 'dark')
    }
  }
}
