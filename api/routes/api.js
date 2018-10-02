const _ = require('lodash')
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.json({ message: 'GET request is success' });
    next();
});

router.get('/meetings', function (req, res, next) {
    let meetings = require('../data/meetings.json')
    res.json(meetings);
    next();
});

router.get('/race', function (req, res, next) {
    let data = require('../data/races.json');
    let link = req.query.link;
    let race = _.find(data.races, (item) => {
        if (link === item.link) return item;
    })
    res.json(race);
    next();
});

router.get('/nexttogo', function (req, res, next) {
    let data = require('../data/nextToGo.json')
    res.json(data);
    next();
});

router.get('/match', function (req, res, next) {
    let data = require('../data/BMunvAjax.json')
    res.json(data);
    next();
});

module.exports = router;