import EmberRouter from '@ember/routing/router';
import config from 'four-point-four-ember-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
