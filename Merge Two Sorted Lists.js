/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const merged = list1.concat(list2);  // Merging the two arrays
    console.log(merged);  // Logging the merged result before returning
    return merged;  // Returning the merged array
};

const list1 = [1, 2, 3];
const list2 = [1, 3, 4];

mergeTwoLists(list1, list2);  // Expected output: [1, 2, 3, 1, 3, 4]
