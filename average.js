let sum=0;
function averageList(data1){
sum = data1.reduce((a, b) => {
  return a + b;
});
return sum;
}

console.log('The sum is: ', averageList([1,2,3,4]));
console.log('The sum is: ', averageList([1,2,3,4,5]));
