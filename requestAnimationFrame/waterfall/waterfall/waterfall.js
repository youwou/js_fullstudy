window.onload = function() {
  imgLocation("container", "box")
}

// 获取当前有多少张图片要摆放
function imgLocation(parent, content) {
  // 将parent下的所有内容全部取出
  var cparent = document.getElementById(parent)
  // console.log(cparent)
  var ccontent = getChildElement(cparent, content)
  console.log(ccontent)
}


function getChildElement(parent, content) {
  var contentArr = []
  var allContent = parent.getElementsByTagName('*')
  // console.log(allContent)
  for (var i = 0; i < allContent.length; i++) {
    if (allContent[i].className == content) {
      contentArr.push(allContent[i])
    }
  }
  return contentArr
}
