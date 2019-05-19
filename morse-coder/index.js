const morseAlphabet = require('./alphabet');

const translate = symbol => morseAlphabet[symbol.toLowerCase().replace(/_/g, "-")];

const trim = text => text.replace(/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{2,}/g," ");

const decode = input => input.replace(/\//g, '').split('  ').map(word => word.split(' ').map(translate).join('')).join(' ');

const encode = text => trim(text).split('').map(translate).join(' ');

const parse = text => {
  let result;
  if (/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g.test(text) && !/[abcdefghijklmnopqrstuvwxyz]/g.test(text)) {
    result = decode(text);
  } else if (!/[.,\/#!'$%\^&\*;:{}=\-_`~()]/g.test(text) && /[abcdefghijklmnopqrstuvwxyz]/g.test(text)) {
    result = encode(text);
  }
  
  if (result) return {
    original: text,
    result,
  };

  throw 'No mix of morse code and letters allowed';
}

module.exports = {
  encode,
  decode,
  translate,
  parse,
};