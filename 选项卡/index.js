let tab = document.getElementById('app'),
  oList = tab.getElementsByTagName('li'),
  oDiv = tab.getElementsByTagName('div');

// function change(index) {
//   for (var i = 0; i < oList.length; i++) {
//     oList[i].className = '';
//     oDiv[i].className = 'box';
//   }
//   oList[index].className = 'active';
//   oDiv[index].className = 'box on';
// }

// for (let i = 0; i < oList.length; i++) {
//   oList[i].onclick = () => {
//     change(i)
//   }
// }

// for (let i = 0; i < oList.length; i++) {
//   ~ function (i) {
//     oList[i].onclick = function () {
//       change(i)
//     }
//   }(i)
// }

// for (let i = 0; i < oList.length; i++) {
//   oList[i].myIndex = i;
//   oList[i].onclick = function () {
//     change(this.myIndex)
//   }
// }

// for (let i = 0; i < oList.length; i++) {
//   oList[i].onclick = (function(){
//     return function(){
//       change(i)
//     }
//   })(i)
// }


// for (let i = 0; i < oList.length; i++) {
//   oList[i].myIndex = i;
//   oList[i].onclick = function () {
//     for (let j = 0; j < oList.length; j++) {
//       oList[j].className = oDiv[j].className = '';
//     }
//     this.className = oDiv[this.myIndex].className = 'active';
//   }
// }

// let previousIndex = 0;
// for (let i = 0; i < oList.length; i++) {
//   oList[i].currentIndex = i;
//   oList[i].onclick = function () {
//     if (this.currentIndex === previousIndex) {
//       return
//     }
//     oList[previousIndex].className = oDiv[previousIndex].className = '';
//     this.className = oDiv[this.currentIndex].className = 'active'
//     previousIndex = this.currentIndex;
//   }
// }

let previousIndex = 0;
for (let i = 0; i < oList.length; i++) {
  oList[i].currentIndex = i;
  oList[i].onclick = function () {
    if (previousIndex === this.currentIndex) {
      return;
    }
    oList[previousIndex].className = oDiv[previousIndex].className = '';
    this.className = oDiv[this.currentIndex].className = 'active';
    previousIndex = this.currentIndex;
  }
}