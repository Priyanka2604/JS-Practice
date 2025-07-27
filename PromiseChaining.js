// Promise.resolve(5)
//     .then((num) => {
//         console.log(`Value: ${num}`);
//         throw new Error("Something went wrong!");
//     })
//     .then((num) => {
//         console.log(`This won't run`);
//     })
//     .catch((error) => {
//         console.error(`Error: ${error.message}`);
//     });

Promise.all([
    Promise.resolve("Task 1 done"),
    Promise.resolve("Task 2 done")
])
    .then(([result1, result2]) => {
        console.log(result1, result2);
        return Promise.resolve("Final Task done");
    })
    .then((finalResult) => console.log(finalResult))
    .catch((error) => console.error(error));
