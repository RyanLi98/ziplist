//Write a function called zipList that accepts two lists of equal length and returns the result of alternatingly
// taking elements. For example: given the two lists [‘a’, ‘b’, ‘c’] and [1, 2, 3], the function should return
// [‘a’, 1, ‘b’, 2, ‘c’, 3]. zipList should not use Underscore. Now write a function called zipListTheSimpleWay that does the same thing using Underscore.



function zipList(list1, list2){
 let zipped = [];
  for(let i = 0; i < list1.length; i++){
     zipped.push(list1[i],list2[i]);
  }
  return zipped;
}
function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}

test =[1, 2, 3];
test1 =['a','b','c'];
console.log(zipList(test,test1));
console.log(zipListTheSimpleWay(test,test1));
