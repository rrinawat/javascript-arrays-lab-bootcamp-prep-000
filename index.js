const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name){
  return kittens.push(name)
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(name){
  return kittens.shift()
}

function appendKitten(name){
  var morekittens = [...kittens, `${name}`]
  return morekittens
}
