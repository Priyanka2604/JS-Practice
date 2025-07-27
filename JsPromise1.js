const promise = Promise.resolve(3126);

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        promise.then(val => console.log(val));
    }, 5000);
});

promise1.then(vals => {
    console.log(vals);
});