function calculate () {
  debugger;
  var amount = $ ('#amount').val ();
  var percentage = $ ('#percentage').val ();
  var tip = amount * (percentage / 100);
  var total = Number (amount) + tip;

  // $  indicated the jQuery library
  // Number () will pass the argument of the amount
  // we are converting the string to Number

  $ ('#tip').val (tip.toFixed (2));
  $ ('#total').val (total.toFixed (2));
  $ ('#calculator').submit (calculate);

  return false; // return false tell that not to read on the new page // it tells the browser not to load a new page
}
