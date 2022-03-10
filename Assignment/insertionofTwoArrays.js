* @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) { // m n
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const result = new Set()
//     Using for loop
    for (let num of set1) {
      if (set2.has(num)) {
        result.add(num)
      }
    }
    return [...result]
};