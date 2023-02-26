let { test, swap } = require('../utils/index.js')
test("快速排序", (array) => {
    digui(array, 0, array.length)
})

function digui(array, start, end) {
    if (end - start < 2) return
    let middleIndex = sortOnce(array, start, end)
    digui(array, start, middleIndex)
    digui(array, middleIndex + 1, end)
}

function sortOnce(array, start, end) {
    let keyValue = array[start]
    let p = start
    let q = end - 1
    while (q > p) {
        if (array[q] < keyValue) {
            while (q > p) {
                if (array[p] > keyValue) {
                    swap(array, p, q)
                    q--;
                    break
                } else {
                    p++
                }
            }
        } else {
            q--
        }
    }
    if (array[q] < keyValue) {
        swap(array, q, start)
        return q;
    }
    return start
}
