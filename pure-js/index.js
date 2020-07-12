'use strict';
const addStyleRule = (function initialSetup() {
  const style = document.createElement('style');
  document.head.append(style);
  style.type = 'text/css';

  return (styles) => {
    style.appendChild(document.createTextNode(styles));
  }
})();

const createAButton = function(text, callback) {
  const basicButton = document.createElement('button');
  const basicButtonText = document.createTextNode(text);
  basicButton.appendChild(basicButtonText);
  document.body.appendChild(basicButton);
  basicButton.onclick = callback;
}

addStyleRule('body { background: #000; }');
addStyleRule(`
  button { display: block; width: 400px; margin-bottom: 5px; background: #fff; border-radius: 15px; color: #000; border:0; padding: 10px 15px; user-select: none; cursor: pointer; outline: 0; }
  button:hover { background: #ccc; }
  button:active { background: #aaa; }
`);

const testSegmentThis = function() {
  const user = function() {
    this.name = 'bob';
    this.job = 'scientist';
    this.changeJob = () => {
      this.job = 'astronaut';
    }
  }
  
  const testFunc = function() {
    console.log(this);
  }
  
  user.prototype.testFunc = testFunc;
  
  testFunc();
  
  const user1 = new user();
  user1.testFunc();
  
  let x;
  console.log(x); //undef
  x = 0/0;
  console.log(x); //NaN
  console.log(typeof(x)) //NaN==number
  x = 1/0;
  console.log(x); //Inf
  console.log(typeof(x)) //Inf==number
  let y = 5/0;
  console.log(x==y);//true
  console.log(x===y);//true
}

const testSegmentObjects = function() {
  const human = {
    sleeps: true,
    eats: true,
    walks: true,
    job: '',
    about() {
      console.log(this.job);
    }
  }
  
  const bob = {
    sleeping: true,
    __proto__: human
  }

  console.log(bob.hasOwnProperty('job'))//f
  bob.about();
  bob.job = 'criminal';
  console.log(bob.hasOwnProperty('job'))//t
  bob.about();
  console.log('talks? - ' + bob.talks);
  human.talks = true;
  console.log('talks? - ' + bob.talks);

  function animal() {
    this.runs = true;
  }

  animal.prototype.talks = true;

  const snake = new animal();

  console.log(snake);
  console.log(snake.talks);

  function panda() {
    animal.call(this);
    this.lazy = true;
  }

  const panda1 = new panda();


  console.log(panda1);//class inheritance
  console.log('talks? - ' + panda1.talks);
  console.log('talks? - ' + panda1.talks);

  //es2015 classes
  class worker {
    constructor(name) {
      this.name = name;
    }
  }

  console.log(new worker('joe'));

  class scientist extends worker {
    research() {
      console.log('researching');
    }
  }

  const joe = new scientist('joe');

  joe.research();

  console.log(joe);


  function fakeConstructor() {
    this.name = 'test';
  }

  console.log(new fakeConstructor());

  //method and variable search goes up in prototype chain until it finds first match. this matches caller
}

const testSegmentGetSet = function() {
  const obj = {
    _name: 'a',
    get name() { return this._name; },
    set name(_name) { this._name = _name; }
  }

  console.log(obj.name);
  obj.name = 'b';
  console.log(obj.name);
}

const testSegmentAsync = function() {
  //promise
  fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
    .then(result => result.json())
    .then(data => console.log(data));
  //async await
  async function get() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200');
    const json = await res.json();
    return json;
    // async returns 
  }
  get()
    .then(res => console.log(res))
  //get().then(zzz => console.log(zzz)); //name doesn't matter
  async function getFail() {
    let tryCount = 0;
    while (tryCount < 5) {
      try {
        const res = await fetch('asdgwaerasdfwersdfwer');
        tryCount = 5;
      } catch {;
        tryCount++;
      }
    }
    if (tryCount >= 5) throw new Error("Couldn't retrieve data");
    const json = await res.json();
    return json;
  };

  getFail()
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

createAButton('Test Segment \'This\'', testSegmentThis);
createAButton('Test Segment \'Objects\'', testSegmentObjects);
createAButton('Test Segment \'GetSet\'', testSegmentGetSet);
createAButton('Test Segment \'Async\'', testSegmentAsync);