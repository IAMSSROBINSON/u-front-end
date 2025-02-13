const startTime = performance.now();

for (let i = 0; i < 200; i++) {
    console.log(i);
}

const endTime = performance.now();
const timeTaken = endTime - startTime;
console.log("Time to execute:", timeTaken + " Milliseconds");