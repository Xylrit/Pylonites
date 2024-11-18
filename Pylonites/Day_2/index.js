let arr = [2, 1, 1, -1, 100000];
var findClosestNumber = function (nums) {
  console.log(
    nums.reduce((a, b) => {
      if (a < b) {
        console.log(a + "this is a");
        return a;
      } else if (a > b) {  
        console.log(b + "this is b");
        return b;
      } else{
				return a
			}
    })
  );
};

findClosestNumber(arr);
