const { Router } = require('express');
const Item = require('../models/Item');

module.exports = Router()

// TO DO - implement items CRUD
  .post('/', async (req, res, next) => {
    try {
      const item = await Item.insert({ user_id: req.user.id, ...req.body });
      res.json(item);
    } catch (e) {
      next (e);
    }
  });


