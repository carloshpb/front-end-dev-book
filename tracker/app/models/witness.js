import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  fName: DS.attr('string'),
  lName: DS.attr('string'),
  email: DS.attr('string'),
  sightings: DS.hasMany('sighting'),
  fullName: Ember.computed('fName', 'email', function(){
    return this.get('fName') + ' - ' + this.get('email');
  })
});
