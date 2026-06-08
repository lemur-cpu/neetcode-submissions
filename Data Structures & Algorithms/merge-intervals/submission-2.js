class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     * 
     * intervals: our array
     * 
     * intervals[i] = [start_i, end_i] merge all the overlapping intervals
     * 
     * return an array of non-overlapping (no common point)
     * 
     * ok so basically just check if its same numbers
     * 
     * merge intervals to mak bigger interval 
     * 
     * for one interval, check the next to see if I2[start] <= I1[end]
     * 
     * ALWAYS SORT WHEN POSSIBLE
     */
    merge(intervals) {

        if (intervals.length <= 1) return intervals;

        // overlap = A[start] <= B[end] && B[start] <= A[end]

        // 1. sort by start times
        intervals.sort((a, b) => a[0] - b[0]); 

        // 2. Load first interval
        const merged = [...[intervals[0]]]; // first interval loaded

        
        for (let i = 1; i < intervals.length; i++){
            const curr = intervals[i];
            const lastMerged = merged[merged.length - 1];

            if (curr[0] <= lastMerged[1]){
                lastMerged[1] = Math.max(lastMerged[1], curr[1]);
            } else {
                merged.push(curr);
            }
        }

        return merged;
    }
}
