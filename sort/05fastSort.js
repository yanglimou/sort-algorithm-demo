let { Utils: { test, swap } } = require('../utils/index.js')
test("快速排序", (array) => {
    // 将一个无序的数组，分成[left],middle,[right]，其中[left]<=middle<=[right]
    // 然后递归排序[left]和[right]
    digui(array, 0, array.length - 1)
})
function digui(array, start, end) { //前后闭区间
    //递归方法结束条件
    if (end - start < 1) return //最多只有1个数字就不用管了
    let middleIndex = sortOne(array, start, end)
    digui(array, start, middleIndex - 1)
    digui(array, middleIndex + 1, end)

}
// 一次排序过程，并找出中间值的索引
function sortOne(array, start, end) {

    let middleValue = array[start] //中间值
    // 从后往前找比middleValue小的数字
    let middleValueIndex = start;
    for (let i = end; i >= start; i--) {
        if (array[i] < middleValue) {
            middleValueIndex = i
        }
    }

    if (middleValueIndex !== start) {

    }
}