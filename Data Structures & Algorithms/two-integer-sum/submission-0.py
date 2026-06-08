from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        lookup = {}



        # array of integers : nums
        # integer : target

        # return indices (location) i and j that:

        # nums[i] + nums[j] == target 

        # i != j

        # only one pair satisfy

        # we need to iterate through the array efficiently

        # brute force option is to check every pair of numbers in the array. What is the better way?

        # What number would I need to reach the target?

        # compliment = target - current position
        
        # enumerate: go through each while taking into account postion

        # complement = target - num
        
        for i, num in enumerate(nums):

            complement = target - num

            if complement in lookup:
                return [lookup[complement], i]

            lookup[num] = i












        
        