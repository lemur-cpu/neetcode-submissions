/**
 * array of ints - nums
 * int - target
 * 
 * return indices i and j
 * 
 * so that nums[i] + nums[j] = target
 * 
 * i can't equal j
 */
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {} // our hashmap

        for (let i = 0; i < nums.length; i++){
            let compliment = target - nums[i];

            if (seen[compliment] !== undefined){
                return [seen[compliment], i];
            }

            seen[nums[i]] = i;
        }

        return [];
    }
}
