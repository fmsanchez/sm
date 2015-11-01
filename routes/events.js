var models  = require('../models');
var express = require('express');
var router = express.Router();

/* GET events. */

router.get('/', function(req, res, next) {
  models.Event.findAll().then(function(events) {
    var json = JSON.stringify(events);
    res.end(json);
  });
});

router.get('/:id', function(req, res, next) {
  console.log("params: ", req.params);
  models.Event.findById(req.params['id']).then(function(result) {
    res.render('events/view', { even: result });
  });
});

router.post('/create', function(req, res, next) {
  models.Event.create({
    name: req.body.eventName,
    description: req.body.eventDescription,
    category: req.body.eventCategory,
    location: req.body.eventLocation,
    geolocation: req.body.eventGeolocation,
    capacity: int(req.body.eventCapacity),
    date: req.body.eventDate,
    duration: req.body.eventDuration
  }).then(function(entry) {
    entry.save();
    res.redirect('/events/' + entry.id);
  });
})

module.exports = router;