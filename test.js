var text = 'outside'
function logIt(asdf){
  console.log(asdf)
  var text = 'inside'
}
logIt(text)
// console.log(logIt(text))