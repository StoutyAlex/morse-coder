const { get } = require('lodash');
const { send, error } = require('./util/response');
const morseCoder = require('./morse-coder');

exports.handler = async (event, context, callback) => {
  try {
    const body = event.body || event;
    const input = JSON.parse(body).input;

    send(callback, morseCoder.parse(input));
  } catch (err) {
    console.log(err);
    error(callback, err);
  }
};
