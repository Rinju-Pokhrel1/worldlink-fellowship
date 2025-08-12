// //callback functions
console.log("start")

setTimeout(() => {
    console.log("Hello Rinju")
}, 0)

console.log("end")

setImmediate(() => {
    console.log("Hello Rinju from setimmediate " )

})

process.nextTick(() => {
    console.log("Hello Rinju from processnexttick")
})
console.log("End")


await new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Hello Rinju from setTimeout")

      resolve()
    }, 5000)
})