let app = document.getElementById('app');

// function code() {
//   let areaStr = '1234567890AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz',
//     res = '';
//   for (let i = 0; i < 4; i++) {
//     let ran = Math.round(Math.random() * (areaStr.length - 1));
//     res += areaStr[ran]
//   }
//   app.innerHTML = res
// }
// code()
// app.onclick = code;







// function code() {
//   let str = '1234567890',
//     res = '';
//   for (let i = 0; i < 4; i++) {
//     let ran = Math.round(Math.random() * (str.length - 1));
//     char = str[ran];
//     console.log(char)
//     if (res.indexOf(char) > -1) {
//       i--;
//       continue;
//     }
//     res += char;
//   }
//   app.innerHTML = res
// }
// code()
// app.onclick = code;



function code() {
  let str = 'asdfghjklASDFGHJKL',
    res = '';
  for (let i = 0; i < 4; i++) {
    let ran = Math.round(Math.random() * (str.length - 1));
    char = str[ran];
    if (res.toLowerCase().indexOf(char.toLowerCase()) > -1) {
      i--;
      continue;
    }
    res += char;
  }
  app.innerHTML = res
console.log();

}
code()
app.onclick = code;

