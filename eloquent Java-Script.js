// Minium

function min(x, y) {
  if (x < y)
    return x;
  else
    return y;
}




// Recursion

function isEven (n) {
  if (n == 0)
      return true;
    else if (n == 1)
      return false;
    else if (n < 0)
      return isEven (-n);
  	else if (n > 1)
      return isEven (n-2);

  }


// Bean counting

function counter (string, letter) {
  var counted = 0
  for(i=0; i < string.length; i++)
    if(string.charAt(i) == letter)
      counted +=1;
      return counted;
    }

  function countBs(string) {
  return counter(string, "B");

}
