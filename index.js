function takeANumber(katzDeliLine, name) {
  var katzDeliLine = [];
  katzDeliLine.push(name);
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing (katzDeliLine) {
  for (var i = 0; i < katzDeliLine.length; i++) {
  if (katzDeliLine.length ===0) {
    return "There is nobody waiting to be served!";
    break;
  }
  else {
   return "Currently serving " + katzDeliLine.shift() + ".";
 }
 }
}

function currentLine (katzDeliLine) {
var lineOrder = [];
if (katzDeliLine.length ===0) {
  return "The line is currently empty.";
}
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      var name = katzDeliLine[i];
      lineOrder.push(' ' + (i+1) + '. ' + name);
    }
  return "The line is currently:" + lineOrder;
  }
}
