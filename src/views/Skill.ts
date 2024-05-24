const express = require('express');
const router = express.Router();

import {} from "../controllers/Skill"


//return all products
router.get('/');

//return a product given it's ID
router.get('/:id')

//Create a new product 
router.post('/');

//Update a product
router.put('/:id');

//Delete a product
router.delete('/:id');

module.exports = router;