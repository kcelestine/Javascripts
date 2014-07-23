var integerRoman =  function(n) {

  numeralValue = [1000, 900, 500, 400, 100, 90, 50,  40, 10, 9, 5, 4, 1];
  numeralLetter= ['M', 'CM', 'D', 'CD', 'C','XC','L','XC','X','IX', 'IV', 'V', 'I'];

  str = "";
  for (i in numeralValue) {
    console.log('');
    console.log('n: ' + n);
    value = numeralValue[i];
    console.log(value);
    counter = 0;
    while (n > value) {
      if (n - value >= 0) {
        n = n - value;
        counter++;
        str+= numeralLetter[i];
      }
    }
    console.log('n: ' + n);
    console.log('counter: ' + counter);
  }
  console.log(str);
};

integerRoman(3738);
integerRoman(1234);
