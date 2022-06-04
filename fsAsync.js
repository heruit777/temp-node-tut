const fs = require('fs');

console.log("Start");
fs.readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    fs.readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        fs.writeFile('./content/results-async.txt', `Here is the resutls : ${first}, ${second}`, { encoding: "utf-8" }, (err, result) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log("Done with this task");
        })
    })
})

console.log("Starting next one");