// Global Object

// console.log(global)

setTimeout(()=>{
    console.log("in the timeout")
    clearInterval(intervalId)
},3000)

const intervalId=setInterval(()=>{
    console.log("in the interval")
},1000)

console.log(__dirname)
console.log(__filename)