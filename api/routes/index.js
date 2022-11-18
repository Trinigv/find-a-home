const { Router } = require('express');
const { findPetById } = require('../controllers/pet_controllers');
const { findUser, createUser } = require('../controllers/user_controllers');

const router = Router();

router.get('/user/:id', findUser);
router.post('/user/create', createUser);

router.get('/pet/:id', findPetById);

module.exports = router;
