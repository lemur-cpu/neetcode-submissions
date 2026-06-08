from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

       # obvious, brute force: iterate over 

       # complement = target - num

       #return if nums[i] + nums[j] == target AND i != j.

       lookup = {} 

       for i, num in enumerate(nums):
            complement = target - num

            if complement in lookup:
                return [lookup[complement], i]

            lookup[num] = i

        


    




   