import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveItemToDB(itemParams) {
      var newItem = this.store.createRecord('item', itemParams);
      newItem.save();
      this.transitionTo('index');
    },
  }
});