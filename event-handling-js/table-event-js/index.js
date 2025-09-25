document.addEventListener('keydown',(e)=>{
    document.querySelector('p').innerHTML = `
    <div class="color">
        <table border="2">
        <tr>
                <td>Key:</td>
                <td>KeyCode</td>
                <th>Code:</th>
            </tr>
            <tr>
                <td>${e.key===' '?'Space':e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    </div>`
    console.log(`Key pressed: ${e.key}`);
})