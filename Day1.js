
function concatenateArray(nums) {
    // output array
    let ans = [];

    // stores the nums.length value, inserting one element from the end of the array
    let len = nums.length;

    for (let i = 0; i < nums.length; i++) {
        // intersting an element starts from 0 index and 3 index as well
        ans[i] = ans[len++] = nums[i];
    }

    return ans;
}

console.log(concatenateArray([22,44,66]));
