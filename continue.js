var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue; //continue == skip
  }
  console.log(number);
}

/* 
    break হলে ওইখানে লুপ থেমে যাবে আর
    continue হলে লুপ এ ঢুকে পরবর্তী Step এ যাবে। 

*/
