const moment = require('moment')

const date = () => moment(new Date()).format("YYYY-MM-D H:mm:ss");

module.exports = {date};