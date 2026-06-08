class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let ans = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

        let left = 0;
        let right = ans.length - 1;

        //starting from opposite sides

        while (left < right){
            if (ans[left] !== ans[right]){
                return false; //mismatch
            }

            left++;
            right--;

        }

    return true;

    }
}
