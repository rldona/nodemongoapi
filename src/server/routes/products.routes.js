var _ = require('lodash');

var Product = require('../models/products.model');

module.exports = function(app) {

  app.post('/product', function(req, res) {
    var newProduct = new Product(req.body);

    newProduct.save(function(err) {
      if(err) {
        res.json({ info: 'Error during product create', error: err });
      }
    });

    res.json({ info: 'Product created successfully' });
  });

  app.get('/products', function(req, res) {
    Product.find(function(err, products) {
      if(err) {
        res.json({ info: 'Product list not found', error: err });
      }

      res.json({ info: 'Product list found successfully', data: products });
    });
  });

  app.put('/product/:id', function (req, res) {
    Product.findById(req.params.id, function(err, enginieer) {
      if (err) {
        res.json({ info: 'error during find enginieer', error: err });
      };

      if (enginieer) {
        _.merge(enginieer, req.body);
        enginieer.save(function(err) {
          if (err) {
            res.json({ info: 'Error during enginieer update', error: err });
          };
          res.json({ info: 'Product updated successfully' });
        });
      } else {
        res.json({ info: 'Product not found' });
      }
    });
  });

  app.delete('/product/:id', function (req, res) {
    Product.findByIdAndRemove(req.params.id, function(err) {
      if (err) {
        res.json({ info: 'Error during remove product', error: err });
      };
      res.json({ info: 'Product removed successfully' });
    });
  });

}
