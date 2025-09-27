let interval = null;
let mode = "increment"; // current mode

document.getElementById("start").onclick = function () {
    const btn = document.getElementById("start");
    const output = document.getElementById("output");

    if (interval === null) {
        // Start increment/decrement
        if (mode === "increment") {
            btn.innerText = "Stop";
            interval = setInterval(() => {
                output.innerText = parseInt(output.innerText) + 1;
            }, 1000);
        } else {
            btn.innerText = "Stop";
            interval = setInterval(() => {
                output.innerText = parseInt(output.innerText) - 1;
            }, 1000);
        }
    } else {
        // Stop the current process
        clearInterval(interval);
        interval = null;

        // Switch mode
        if (mode === "increment") {
            mode = "decrement";
            btn.innerText = "Decrement";
        } else {
            mode = "increment";
            btn.innerText = "Increment";
        }
    }
};