window.onload = function() {
  let showMenu = false;
  let bMenu = document.querySelector('#bMenu');
  let aMenu = document.querySelector('#aMenu');
  bMenu.onclick = function() {
    if (!showMenu) {
      aMenu.setAttribute('class', 'showMenu');
      showMenu = true;
    } else {
      aMenu.setAttribute('class', 'closeMenu');
      showMenu = false;
    }
  }

  let mql = window.matchMedia('(min-width: 600px)');
  mql.addListener(mqCallBack);

  function mqCallBack(mql) {
    if (mql.matches) {
      // 宽度大于等于600像素
      aMenu.setAttribute('class', 'showMenu');
    } else {
      // 宽度小于600像素
      aMenu.setAttribute('class', 'closeMenu');
    }
  }

  let dts = document.querySelectorAll('dt');
  dts.forEach(function(dt) {
    let show = false;
    let dl = dt.parentElement;
    dl.style.height = '20px';
    let add = dl.children[0];
    let minus = dl.children[1];
    let height = dl.children.length - 2;
    dl.onclick = function() {
      if (show) {
        dl.style.height = '20px';
        add.style.height = '17px';
        minus.style.height = '0px';
        show = false
      } else {
        dl.style.height = `${height*28}px`;
        add.style.height = '0px';
        minus.style.height = '17px';
        show = true;
      }
    }
  });

}
