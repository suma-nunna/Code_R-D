function concatenateArray(nums) {
    let ans = [];
    let index = 0;

    for (let i = 0; i < nums.length; i++) {
        ans[index++] = nums[i];
    }

    console.log(ans, index);

    for (let i = 0; i < nums.length; i++) {
        ans[index++] = nums[i];
    }

    return ans;
}

console.log(concatenateArray([22,44,66]));