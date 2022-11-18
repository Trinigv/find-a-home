const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	fullName: String,
	email: String,
	password: String,
	pets: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Pet',
		},
	],
	role: {
		type: String,
		enum: ['User', 'Admin', 'Banned'],
	},
});

module.exports = mongoose.model('User', UserSchema);
