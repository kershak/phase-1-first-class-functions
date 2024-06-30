
function receivesAFunction (callback){
    callback();
}

function returnsANamedFunction() {
  return function named() {
    console.log("Someone named Emily")
  }
}

function returnsAnAnonymousFunction (name){
    return function() {
        console.log('Anonymous');
      }
    }
    