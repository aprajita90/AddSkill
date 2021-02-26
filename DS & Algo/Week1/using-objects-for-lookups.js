// Using Objects for Lookups
function phoneticLookup(val) {
    var result = "";
    // Only change code below this line
   var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
    undefine: "undefined"
  };
    result = lookup[val];
    return result;
  }
  
  phoneticLookup("charlie");