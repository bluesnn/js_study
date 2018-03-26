window.onload = () => {
  // let num = parseFloat('width:12px')
  // if (num == 12) {
  //   alert(12)
  // } else if (num == NaN) {
  //   alert(NaN)
  // } else if (typeof num == 'number') {
  //   alert(0)
  // } else {
  //   alert('qq')
  // }
  let _box = document.getElementById('app')
  let _list = _box.getElementsByTagName('li')
  for (let i = 0; i < _list.length; i++) {
    // i % 2 === 1 ? _list[i].style.backgroundColor = 'blue' : null;
    // let j = parseInt(i/3);
    // if (i % 3 === 0) {
    //   _list[i].style.backgroundColor = 'blue'
    // } else if (i % 3 === 1){
    //   _list[i].style.backgroundColor = 'red'
    // } else if (i % 3 === 2){
    //   _list[i].style.backgroundColor = 'yellow'
    // }

    // switch (i % 3) {
    //   case 0:
    //     _list[i].style.backgroundColor = 'red'
    //     break;
    //   case 1:
    //     _list[i].style.backgroundColor = 'yellow'
    //     break;
    //   case 2:
    //     _list[i].style.backgroundColor = 'blue'
    // }

    // let _this = this
    _list[i].className = 'c' + (i % 3 + 1)
    _list[i].myBg = _list[i].className
    _list[i].onmousemove = function(){
      this.className = 'hover'
    }
    _list[i].onmouseout = function() {
      this.className = this.myBg
    }

  }
}