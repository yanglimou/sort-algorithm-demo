let { test, swap } = require('../utils/index.js')
test("冒泡排序", (array) => {
    /**
     * 两两交换位置，将最大的元素冒泡到最后
     */
    for (let i = 1; i <= array.length - 1; i++) { // 只需要循环n-1次
        for (let j = 1; j <= array.length - i; j++) { // 第一次需要交换n-1回，拿当前元素与前一个元素比较
            if (array[j - 1] > array[j])
                swap(array, j - 1, j)
        }
    }
})