function Block(){
    this.upDivWarp = null
    this.downDivWarp = null
    this.downHeight = baseObj.RandomNum(0,150)
    this.gapHeight = baseObj.RandomNum(150,160)
    this.upHeight = 312 - this.downHeight - this.gapHeight
    
    //用生成DIV的方法来放管道
    this.createDiv = function(url,height,positionType,left,top){
        var newDiv = document.createElement('div')
        newDiv.style.width = '62px'
        newDiv.style.height = height
        newDiv.style.position = positionType
        newDiv.style.left = left
        newDiv.style.top = top
        newDiv.style.backgroundImage = url
        return newDiv
    }
    this.createBlock = function(){
        var upDiv1 = this.createDiv('url(image/img/up_mod.png)',this.upHeight + 'px')
        var upDiv2 = this.createDiv('url(image/img/up_pipe.png)','60px')
        this.upDivWarp = this.createDiv(null,null,'absolute','450px')
        this.upDivWarp.appendChild(upDiv1)
        this.upDivWarp.appendChild(upDiv2)//生成上方管道

        var downDiv1 = this.createDiv('url(image/img/down_pipe.png)','60px')
        var downDiv2 = this.createDiv('url(image/img/down_mod.png)',this.downHeight + 'px')
        this.downDivWarp = this.createDiv(null,null,'absolute','450px',363 - this.downHeight + 'px')
        this.downDivWarp.appendChild(downDiv1)
        this.downDivWarp.appendChild(downDiv2)


        jsWrapBg.appendChild(this.upDivWarp)
        jsWrapBg.appendChild(this.downDivWarp)
    }
    this.moveBlock = function(){
        this.upDivWarp.style.left = this.upDivWarp.offsetLeft - 3 + 'px'
        this.downDivWarp.style.left = this.downDivWarp.offsetLeft - 3 + 'px'


    }
}