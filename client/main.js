import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.login.events({
  "click .login": function() {
    Meteor.loginWithSaml(function() {
      console.log("Welcome " + Meteor.user().profile.givenName + "!");
      document.getElementById('greeting').innerHTML = "Welcome " + Meteor.user().profile.givenName + "!"
    });
  }
});
