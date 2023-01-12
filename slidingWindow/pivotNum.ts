function findPivotSum(nums){
  var totalSum = 0
var leftSum = 0
for(let i = 0 ; i < nums.length; i++){
    totalSum += nums[i]
}

for(let i = 0; i < nums.length; i++) {
    if(leftSum == totalSum - leftSum - nums[i]) {
        return i;
    }
    leftSum += nums[i]
}
return -1;
}
