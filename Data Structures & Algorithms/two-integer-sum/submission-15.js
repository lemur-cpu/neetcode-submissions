


class Solution {
    /**
     * array of integers - nums
     * integer - target
     * 
     * return indices i and j
     * 
     * when the sum of nums[i] and nums[j] is equal to target and i doesn't equal j
     * 
     * return answer with smaller index first (so fail fast etc)
     * 
     * example: [4,5,6]
     * 
     * target = 10
     * 
     * safely assume every array has one pair
     * 
     * completment problem 
     * 
     * complement = target - i
     * 
     * check if complement is in seen 
     * 
     * so really we are returning [seen[complement] and i
     */
    twoSum(nums, target){
    let seen = {};

    for (let i = 0; i < nums.length; i++){
        let comp = target - nums[i];

        if (seen[comp] !== undefined){ // if it is seen array
            return [seen[comp], i];  
        }
        seen[nums[i]] = i;
    }

    return []; 
}

}

