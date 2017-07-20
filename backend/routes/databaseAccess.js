const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

router.get('/all', (req, res) => {
  TodoItem.find()
    .then(responses => {
      res.send(responses);
    })
    .catch(error => {
      res.send(error);
    })
})

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task,
    completed: false
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
  });

  router.post('/remove', (req, res) => {
    TodoItem.findById(req.body.id)
      .then(response => {
        response.remove();
        res.send(response);
      })
      .catch(error => {
        res.send(error);
      })
    });

  router.post('/toggle', (req, res) => {
    TodoItem.findById(req.body.id)
      .then(response => {
        console.log('OLDRESPONSE', response);
        response.completed = !response.completed;
        console.log('NEWRESPONSE', response);
        response.save()
          .then(savedResponse => {
            console.log('SAVEDRESPONSE', savedResponse);
            res.send(savedResponse);
          });
      })
      .catch(error => {
        res.send(error);
      })
    });


module.exports = router;
