const { Router } = require('express');
const Item = require('../models/Item');
const authorize = require('../middleware/authorize');

module.exports = Router()

// TO DO - implement items CRUD
  .post('/', async (req, res, next) => {
    try {
      const item = await Item.insert({ user_id: req.user.id, ...req.body });
      res.json(item);
    } catch (e) {
      next (e);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const items = await Item.getAll(req.user.id);
      const ids = items.map((item) => ({ id: item.id, description: item.description, qty: item.qty, bought: item.bought, user_id: item.user_id
      }));
      res.json(ids);
    } catch (e) {
      next (e);
    }
  })
  .put('/:id', authorize, async (req, res, next) => {
    try {
      const item = await Item.updateById(req.params.id, req.body);
      res.json(item);
    } catch (e) {
      next (e);
    }
  });


