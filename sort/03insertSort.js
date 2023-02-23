let { Utils: { test, swap } } = require('../utils/index.js')
test("插入排序", (array) => {
    /**
     * 将后一个元素插入到前面已经排好序的数组中，并移动元素
     */
    for (let i = 1; i <= array.length - 1; i++) { // 只需要循环n-1次
        //将第i个元素插入到[0,i-1]的数组中
        let index = i
        for (let j = i - 1; j >= 0; j--) {
            if (array[i] < array[j]) {
                index = j
            } else {
                break;
            }
        }
        if (index !== i) { //需要把i元素的位置放到index，然后把i-1到index的元素往后移动1位
            let temp = array[i]
            for (j = i - 1; j >= index; j--) {
                array[j + 1] = array[j]
            }
            array[index] = temp
        }
    }
})