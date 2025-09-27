document.getElementById('values').addEventListener('dblclick', function(e) {
    console.log('Clicked here....');
    const val = e.target;
    const parent = e;
    console.log(val,e);
    console.log(val.tagName);
    console.log(val.parentNode);
    if(val.tagName !== 'LI') {
        return;
    }
    val.remove();
})