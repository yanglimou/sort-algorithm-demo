let { test, swap } = require('../utils/index.js')
test("堆排序", (array) => {
    for (let length = array.length; length > 1; length--) {
        if (length === array.length) {
            // 初次需要构造整个大根堆
            for (let index = (length >> 1) - 1; index >= 0; index--) {
                handle(array, length, index)
            }
        } else {
            // 后面只需要从上往下处理就行了
            handle(array, length, 0)
        }
        swap(array, 0, length - 1)
    }
})
function handle(array, length, index) {
    let leftIndex = (index << 1) + 1
    if (leftIndex >= length) return
    let maxIndex = index
    if (array[leftIndex] > array[maxIndex]) maxIndex = leftIndex
    let rightIndex = (index << 1) + 2
    if (rightIndex < length && array[rightIndex] > array[maxIndex]) maxIndex = rightIndex
    if (maxIndex !== index) {
        swap(array, index, maxIndex)
        handle(array, length, maxIndex)
    }
}
