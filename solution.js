function toWeirdCase(string){
  var words = string.split(" ")
  return words.map(function(word){
    return word.split("").map(function(char, i){
      return i % 2 == 0 ? char.toUpperCase() : char.toLowerCase();
    }).join("")
  }).join(" ")
}
