class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     * 
     * note: not returning anything, just changing s
     * 
     * has to be 0(1) so no hashmap trick 0(n)
     * 
     * Going to use a stack for this
     */
    reverseString(s) {
        let tmp = [];

        for (let i = s.length - 1; i >= 0; i--){ //going backwards
            tmp.push(s[i]);
        }

        for (let j = 0; j < s.length; j++){
            s[j] = tmp[j];
        }

    }
}
