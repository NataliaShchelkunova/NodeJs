const Task = require('../../db/models/tasks/index');

module.exports.getAllTasks = (req, res) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewTask = (req, res) => {
  const task = new Task(req.body);
  task.save().then(result => {
    Task.find().then(result => {
      res.send({ data: result });
    });
  });
}

module.exports.changeTaskInfo = (req, res) => {
  const { body } = req;
  if (body.hasOwnProperty('_id') && (body.hasOwnProperty('text') || body.hasOwnProperty('isCheck'))) {
    Task.updateOne({ _id: body._id }, body).then(result => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  }
  else {
    res.status(422).send('Error! Params not correct');
  };
};

module.exports.deleteTask = (req, res) => {
  const id = req.query.id;
  if (id) {
    Task.deleteOne({ _id: id }).then(result => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  } else {
    res.status(422).send('Error! Params not correct');
  };
};


