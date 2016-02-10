var express = require('express');
var app = express();
var PORT = 8080

app.get("/", function(req, res) {
  res.send("works");
});

app.get('/:mathName/:numberOne/:numberTwo', function(req, res) {
 console.log (req.params.mathName)
 if (req.params.mathName == "addition"){
  var numberOne= parseInt(req.params.numberOne);
  var numberTwo= parseInt(req.params.numberTwo);
  res.sendStatus(numberTwo + numberOne)
  } 
 else if (req.params.mathName == "subtraction"){
  var numberOne= parseInt(req.params.numberOne);
  var numberTwo= parseInt(req.params.numberTwo);
  res.sendStatus(numberOne - numberTwo)
  }
   else if (req.params.mathName == "multiplication"){
  var numberOne= parseInt(req.params.numberOne);
  var numberTwo= parseInt(req.params.numberTwo);
  res.sendStatus(numberOne * numberTwo)
  }
    else if (req.params.mathName == "division"){
  var numberOne= parseInt(req.params.numberOne);
  var numberTwo= parseInt(req.params.numberTwo);
  res.sendStatus(numberOne / numberTwo)
  }
});


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});