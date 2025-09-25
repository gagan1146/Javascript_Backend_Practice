const clk = document.querySelector('#clock');

function updateTime(){
    const date = new Date();
    clk.textContent = date.toLocaleTimeString();
}
setInterval(updateTime, 1000);
updateTime(); // Initial call to set the time immediately