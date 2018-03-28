let app = document.getElementById('app');

function code() {
  let areaStr = '1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
    res = '';
  for (let i = 0; i < 4; i++) {
    let ran = Math.round(Math.random() * (areaStr.length - 1));
    res += areaStr[ran]
  }
  app.innerHTML = res
}
code()
app.onclick = code;