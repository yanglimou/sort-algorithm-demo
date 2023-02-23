let { Utils: { test, swap } } = require('../utils/index.js')
test("选择排序", (array) => {
    /**
     * 选择最大的一个，然后与最后一个元素交换
     */
    for (let i = 1; i <= array.length - 1; i++) { // 只需要循环n-1次
        let max = array[0]
        let maxIndex = 0;
        for (let j = 1; j <= array.length - i; j++) { // 从第一个元素开始选择，一直到最后一个元素，求出最大元素的位置和最后一个元素交换
            if (array[j] > max) {
                max = array[j]
                maxIndex = j
            }
        }
        if (maxIndex !== array.length - i) {
            swap(array, maxIndex, array.length - i)
        }
    }
})