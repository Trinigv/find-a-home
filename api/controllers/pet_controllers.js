const mongoose = require('mongoose');
const Pet = require('../db/models/Pet');

const findPetById = async (req, res) => {
	const { id } = req.params;
	if (mongoose.isValidObjectId(id) === false) {
		return res.status(500).send('Error: incorrect id');
	}
	try {
		const find_pet = await Pet.findById(id);
		res.status(200).send(find_pet);
	} catch (e) {
		console.log(e);
	}
};

module.exports = { findPetById };
