import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import Study from './components/study';
import Team from "./components/team";

const APPS = {
  HelloWorld,
  Study,
  Team
}

function renderAppInElement(el) {
  var App = APPS[el.dataset.component];
  if (!App) return;
  // get props from elements data attribute, like the post_id
  const props = Object.assign({}, el.dataset);
  ReactDOM.render(<App {...props} />, el);
}

document
  .querySelectorAll('.__react-app')
  .forEach(renderAppInElement)