let obj = {
  name: 'blue',
  age: 18,
  1: '上海',
  color: 'red'
}
for (let key in obj) {
  // console.log(key);
  let val = obj[key]
  console.log(val);
  document.write(val)

  // if (obj.hasOwnProperty(key)) {
  //   let element = obj[key];
  //   // console.log(element);
  // }
}
