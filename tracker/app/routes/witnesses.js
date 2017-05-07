import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let witnessRecord = this.store.createRecord('witness', {
      fName: "Todd",
      lName: "Gandee",
      email: "fake@skidoo.com"
    });
    return [witnessRecord];
  }
});
