import Ember from 'ember';
import Resolver from 'ember/resolver';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'app', // TODO: loaded via config
  Resolver: Resolver
});

export default App;
