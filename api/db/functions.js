const User = require('./models/User');
const Pet = require('./models/Pet');
const PetData = require('./JSON Data/Pet.json');
const UserData = require('./JSON Data/User.json');

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

function modifyData() {
	if (process.argv[2] === '-i') {
		importData().then();
		console.log('Data created');
	} else if (process.argv[2] === '-d') {
		deleteData().then();
		console.log('Data deleted');
	}
}

module.exports = { modifyData };
