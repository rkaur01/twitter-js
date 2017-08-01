//this module will hold all the tweets and give us methods to interact with them
const _ = require('lodash');
//this array will store the tweets
var data = [];

function add (name, content) {
  var id = hash(name, content);
  data.push({ name: name, content: content, id: id});
}

function hash(name, content) {
  var newArr = name.split(' ').concat(content.split(' '));
  return newArr.reduce(function(acc, cur) { return acc + cur.length.toString(10)}, '');
}

function list () {
    //recursive cloning of data
  return _.cloneDeep(data);
}

function find (properties) {
    //return a cloned array with all elements that match properties
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

// const getFakeName = function() {
//   const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
//   const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
//   return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
// };

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " +  + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

// for (let i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }

module.exports.add("Jamie Lau", "what is your name?");
module.exports.add("Jamie Lau", "Where are thou?");
