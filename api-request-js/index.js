function viewProfile(){
    window.open(url);
}

let url ="";
const xhr = new XMLHttpRequest();
const request_url = 'https://api.github.com/users/gagan1146'
xhr.open('GET', request_url);
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const image = document.getElementById('avatar').src = response.avatar_url;
      const name = document.getElementById('name').innerText = response.login;
      url = response.html_url;
    } else {
      console.error('Error fetching data:', xhr.status, xhr.statusText);
    }
  }
}
xhr.send();

