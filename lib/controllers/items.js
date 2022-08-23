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
  })
  .get('/', async (req, res, next) => {
    try {
      console.log(req.user);
      const items = await Item.getAll(req.user.id);
      const ids = items.map((item) => ({ id: item.id, description: item.description, qty: item.qty, bought: item.bought, user_id: item.user_id
      }));
      console.log(items);
      res.json(ids);
    } catch (e) {
      next (e);
    }
  });


