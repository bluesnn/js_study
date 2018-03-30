// 方案一：
// let url = 'https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1'

// let questionIndex = url.indexOf('?');
// // console.log(questionIndex)
// newUrl = url.substring(questionIndex + 1);
// // console.log(newUrl)
// let ary = newUrl.split('&');
// console.log(ary)
// let obj = {};
// for (let i = 0; i < ary.length; i++) {
//   let cur = ary[i];
//   // console.log(cur);
//   let newAry = cur.split('='),
//   key = newAry[0],
//   value = newAry[1];
//   obj[key] = value
//   // console.log(key);
// }
// console.log(obj)
// document.write(JSON.stringify(obj))


// 方案二
// function queryUrl(url) {
//   let questionIndex = url.indexOf('?');
//   let obj = {};
//   if (questionIndex === -1) {
//     return obj
//   }
//   url = url.substring(questionIndex + 1).split('&')
//   // for (let i = 0; i < url.length; i++) {
//   //   arr = url[i].split('=')
//   //   obj[arr[0]] = arr[1]
//   // }
//   // return obj
//   // console.log(url);

//   url.forEach((item) => {
//     arr = item.split('=')
//     // console.log(arr);
//     obj[arr[0]] = arr[1]
//   });
//   return obj

// }
// // queryUrl('https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1')
// console.log(queryUrl('https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1'));
// document.write(JSON.stringify(queryUrl('https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1')))


function queryUrl(url) {
  let obj = {};
  let newUrl = url.substring(url.indexOf('?') + 1).split('&');
  if (url.indexOf('?') === -1) {
    return obj 
  }
  newUrl.forEach(item => {
    arr = item.split('=');
    obj[arr[0]] = arr[1];
  });
  return obj;
  console.log(obj);
}
queryUrl('https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1');
console.log(queryUrl('https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1'));


// 方案三
// String.prototype.myQueryUrl = function myQueryUrl() {
//   let obj = {};
//   let reg = /([^=?&]+) = ([^=?&]+)/g;
//   this.replace(reg, function () {
//     let arg = arguments;
//     obj[arg[1]] = arg[2];
//   });
//   return obj;
// }
// let str = 'https://www.baidu.com/s?wd=node&rsv_spt=1&issp=1';
// console.log(str.myQueryUrl());