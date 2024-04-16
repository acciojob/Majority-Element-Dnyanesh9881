//your code here


function findMajorityElement(nums) {
    let candidate;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
            count++;
        } else if (candidate === num) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}
let arr=[2,1,2];
console.log(finMajorityElement(arr))
