class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * 
     * Given a string consisting of:
     *  (   )   {   }   [   ]
     * 
     * s is valid if:
     *  every open bracket is closed by right close bracket (vice versa)
     *  closed in correct order: [] not ][
     *  KEY - must be closed in right order. doesn't need to be right next to
     *  
     * return (if s is valid)
     * 
     * 
     * 
     */
    isValid(s) {
        let stack = []; // stack

        let pairs = { // hashmap
            ")" : "(",
            "}" : "{",
            "]" : "["
        };

        for (const char of s){
            if(!(char in pairs)){ // checking if even a valid char / opening bracket, otherwise push to stack
                stack.push(char);
            } else {
                if (stack.pop() !== pairs[char]){ // if you pop the first one off the stack and its not the pair
                    return false; // return failure
                }
            }

        }

        return stack.length === 0; // if stack is not 0 its false. if stack is 0, no problems 

    }
}
