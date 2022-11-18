const mongoose = require('mongoose');
const User = require('../db/models/User');

const findUser = async (req, res) => {
	const { id } = req.params;
	if (!id || !mongoose.isValidObjectId(id)) {
		return res.status(500).send('Error: incorrect id');
	}
	try {
		const find_user = await User.find({ _id: id });
		if (find_user.length == 0) {
			return res.status(404).send('Error: user not found');
		}
		res.status(200).send(find_user);
	} catch (e) {
		console.log(e);
	}
};

const createUser = async (req, res) => {
	const { fullName, email, password, pets_id } = req.body;
	if (
		fullName == null ||
		email == null ||
		password == null ||
		pets_id == null
	) {
		res.status(400).send('Error: missing data');
	}
	try {
		const new_user = await User.create({
			fullName: fullName,
			email: email,
			password: password,
			pets: pets_id,
		});
		return res.status(201).send(new_user);
	} catch (err) {
		console.log(err);
	}
};

module.exports = { findUser, createUser };
