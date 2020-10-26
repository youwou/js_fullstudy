window.onload = function() {
  imgLocation('container','box')
}

// 获取到当前有多少张图片要摆放
function imgLocation(parent,content) {
  var cparent = document.getElementById(parent)
  var ccontent = getChildElement(cparent,content)
  var imgWidth = ccontent[0].offsetWidth
  var num = Math.floor(document.documentElement.clientWidth / imgWidth)
  cparent.style.width = `${imgWidth * num}px`

  //拿到第二行的第一张图片，放到第一行高度最小的图片下面
  var boxHeightArr = []
  for (var i = 0; i < ccontent.length; i++) {
      if (i < num) {
          boxHeightArr[i] = ccontent[i].offsetHeight
      } else {
        var minHeight = Math.min.apply(null,boxHeightArr)//通过apply方法可以将math里面的min方法借给数组用
        // console.log(minHeight);
        var minIndex = getMinHeightLocation(boxHeightArr,minHeight)
        ccontent[i]
      }
  }
  // console.log(boxHeightArr);
}

function getChildElement(parent,content) {
  var contentArr = []
  var allContent = parent.getElementsByTagName('*')
  for (var i = 0;i < allContent.length; i++){
    if (allContent[i].className == content) {
      contentArr.push(allContent[i])
    }
  }
  return contentArr

}

function getMinHeightLocation(boxHeightArr,minHeight) {
  for (var i = 0; i < boxHeightArr.leng; i++) {
    if (boxHeightArr[i] === minHeight) {
      return i
    }
  }
}
