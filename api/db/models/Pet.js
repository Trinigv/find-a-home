const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
	name: String,
	kind: {
		type: String,
		enum: ['Cat', 'Dog'],
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = mongoose.model('Pet', PetSchema);
