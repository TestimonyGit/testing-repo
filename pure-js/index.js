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

const testSegmentPrototypes = function() {
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
  
  for(let prop in rabbit) {
  }

  bob.about();
  bob.job = 'criminal';
  bob.about();

  //method and variable search goes up in prototype chain until it finds first match. this matches caller
}

createAButton('Test Segment \'This\'', testSegmentThis);
createAButton('Test Segment \'Prototypes\'', testSegmentPrototypes);