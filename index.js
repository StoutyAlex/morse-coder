const { send, error } = require('./util/response');
const morseCoder = require('./morse-coder');

exports.handler = async (event, context, callback) => {
  try {
    const body = event.body || event
    
    send(callback, morseCoder.parse(body.input));
  } catch (err) {
    error(callback, err);
  }
};
