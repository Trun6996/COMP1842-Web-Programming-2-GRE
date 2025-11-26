const controller = require('../controllers/userController');

module.exports = function(app) {
  app.post('/users', controller.register);
  app.get('/users', controller.list);
  app.delete('/users/:id', controller.delete);
  app.put('/users/:id', controller.update);
  app.post('/login', controller.login);
};
