const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Location = require('../../models/Location');

// @route  Get api/locations
// @desc   Test route
// @access Public
router.get('/', async (req, res)=> {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});


// @route    POST api/locations
// @desc     Create a location
// @access   Private
router.post( 
    '/',
    [
        check('name', 'Name is required')
          .not()
          .isEmpty(),
        check('city', 'City is required')
          .not()
          .isEmpty()
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      try {
        const newLocation = new Location({
          name: req.body.name,
          description: req.body.description,
          city: req.body.city,
          cityId: req.body.cityId
        });
  
        const location = await newLocation.save();
        res.json(location);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  );
  


module.exports = router;