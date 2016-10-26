var _ = require('lodash');

var Engineer = require('../models/engineers.model');

module.exports = function(app) {

  app.post('/engineer', function(req, res) {
    var newEngineer = new Engineer(req.body);

    newEngineer.save(function(err) {
      if(err) {
        res.json({ info: 'Error during engineer create', error: err });
      }
    });

    res.json({ info: 'Engineer created successfully' });
  });

  app.get('/engineers', function(req, res) {
    Engineer.find(function(err, engineers) {
      if(err) {
        res.json({ info: 'Enginieer list not found', error: err });
      }

      res.json({ info: 'Enginieer list found successfully', data: engineers });
    });
  });

  app.put('/engineer/:id', function (req, res) {
    Engineer.findById(req.params.id, function(err, enginieer) {
      if (err) {
        res.json({ info: 'error during find enginieer', error: err });
      };

      if (enginieer) {
        _.merge(enginieer, req.body);
        enginieer.save(function(err) {
          if (err) {
            res.json({ info: 'Error during enginieer update', error: err });
          };
          res.json({ info: 'Enginieer updated successfully' });
        });
      } else {
        res.json({ info: 'Enginieer not found' });
      }
    });
  });

  app.delete('/engineer/:id', function (req, res) {
    Engineer.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({ info: 'Error during remove engineer', error: err });
      };
      res.json({ info: 'cat removed successfully' });
    });
  });

}
