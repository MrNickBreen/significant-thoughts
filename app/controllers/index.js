import Ember from 'ember';

export default Ember.ArrayController.extend({
	//itemController: 'thought',
	newThought: '',
	total: Ember.computed.sum('model'),
	actions: {
		saveThought: function() {
			var newThought,
				newThoughtName = this.get('newThought');
			if (newThoughtName) {
				newThought = this.store.createRecord('thought', {
					name: newThoughtName
				});
				newThought.save(); 
			}
		}
	}	
});
