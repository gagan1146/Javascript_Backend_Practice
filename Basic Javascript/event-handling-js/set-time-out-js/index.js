const set_time = setTimeout(()=>{
    document.getElementById('heading').textContent="GAGAN SHARMA";
    document.getElementById('res').textContent="Stop is not called";
    document.getElementById('res').style="color:green";
    document.getElementById('stop').style="visibility:hidden";
    let textres = document.getElementById('res');
    textres.style.transition = "transform 1s";
    setInterval(()=>{
        if (!textres.classList.contains('moved')) {
            textres.style.transform = "translateX(100px)";
            textres.classList.add('moved');
        } else {
            textres.style.transform = "translateX(0px)";
            textres.classList.remove('moved');
        }
    },2000);
},3000);


document.querySelector('#stop').addEventListener('click', () => {
    clearTimeout(set_time);
    document.getElementById('res').textContent = "Stop is called";
    document.getElementById('res').style = "color:red";
    let stopBtn = document.getElementById('stop');
    stopBtn.style.transition = "transform 1s";
    setInterval(()=>{
        if (!stopBtn.classList.contains('moved')) {
            stopBtn.style.transform = "translateX(100px)";
            stopBtn.classList.add('moved');
        } else {
            stopBtn.style.transform = "translateX(0px)";
            stopBtn.classList.remove('moved');
        }
    },2000);
});



document.getElementById('stop').setAttribute("style", "width:120px;height:50px;background-color:#4CAF50;color:white;border:none;border-radius:10px;font-size:16px;box-shadow:0 4px 6px rgba(0,0,0,0.1);cursor:pointer;transition:0.3s");

let colors=['red','pink','purple','blue','black'];
let c=0;
setInterval(()=>{
    c=c%5;
    color=colors[c];
    c=c+1;
    document.getElementById('heading').style=`color:${color}`
},2000)