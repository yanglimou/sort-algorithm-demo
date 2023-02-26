class Utils {
    createRandomArray = (length = 10, boundary = 100) => {
        return new Array(length).fill(0).map(v => Math.floor(Math.random() * boundary))
    }
    test = (name, func) => {
        let start = new Date().getTime()
        let times = 100;
        let successTimes = 0;
        for (let i = 0; i < times; i++) {
            let array = this.createRandomArray()
            let temp = JSON.stringify(array);
            func(array)
            let boolean = this.isSort(array)
            if (boolean) successTimes++;
            if (i === 0)
                console.log("首次执行明细：原始数组：", temp, "排序数组：", JSON.stringify(array), "排序结果：" + (boolean ? "成功" : "失败"))
        }
        console.log(`${name}算法执行${times}次,成功${successTimes}次,总共耗时： ${(new Date().getTime() - start)}ms`)
    }
    isSort = (array) => {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) return false
        }
        return true
    }
    swap = (array, i, j) => {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}
module.exports = new Utils()