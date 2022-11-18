const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { PORT, URI } = process.env;
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
const User = require('./db/models/User');
const Pet = require('./db/models/Pet');
const PetData = require('./db/JSON Data/Pet.json');
const UserData = require('./db/JSON Data/User.json');
const router = require('./routes/index');

app.use(cors());
app.use('/api', router);
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});

mongoose
	.connect(URI)
	.then(() => console.log('DB connected'))
	.catch((err) => console.log(err));

const importData = async () => {
	try {
		await User.create(UserData);
		await Pet.create(PetData);
	} catch (err) {
		console.log(err);
	}
};

const deleteData = async () => {
	try {
		await User.deleteMany();
		await Pet.deleteMany();
		console.log('Data deleted');
	} catch (err) {
		console.log(err);
	}
};
