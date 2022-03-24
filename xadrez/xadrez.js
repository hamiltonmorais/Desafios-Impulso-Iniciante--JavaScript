var l = parseInt(gets());
var c = parseInt(gets());



if (l % 2 == 0 &&  c % 2 == 0) {
  print(1);
} else if(l === c) {
  print(1);
} else if(l % 2 != 0 &&  c % 2 == 0) {
  print(0);
} else if(l % 2 == 0 &&  c % 2 != 0) {
  print(0);
} else if(l % 2 != 0 &&  c % 2 != 0) {
  print(1);
} 