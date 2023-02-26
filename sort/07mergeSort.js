let { test, swap } = require('../utils/index.js')
test("归并排序", (array) => {
    digui(array, 0, array.length)
})

function digui(array, start, end) {
    if (end - start < 2) return
    let middle = ((end - start) >> 1) + start
    digui(array, start, middle)
    digui(array, middle, end)
    merge(array, start, middle, end)
}

function merge(array, start, middle, end) {
    let result = new Array(end - start)
    let p = start
    let q = middle
    let index = 0;
    while (p < middle && q < end) {
        result[index++] = array[p] < array[q] ? array[p++] : array[q++]
    }
    while (p < middle) {
        result[index++] = array[p++]
    }
    while (q < end) {
        result[index++] = array[q++]
    }
    for (let i = 0; i < result.length; i++) {
        array[start + i] = result[i]
    }
}