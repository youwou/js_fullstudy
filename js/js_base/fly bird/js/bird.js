var bird = {
    flyTimer: null,//小鸟飞翔的定时器
    wingTimer: null,//小鸟翅膀摆动的定时器
    div: document.createElement('div'),
    showBird: function (parentObj) {
        this.div.style.width = '40px'
        this.div.style.height = '48px'
        this.div.style.backgroundImage = 'url(image/img/bird0.png)'
        this.div.style.backgroundRepeat = 'no-repeat'
        this.div.style.position = 'absolute'
        this.div.style.left = '50px'
        this.div.style.top = '200px'
        this.div.style.zIndex = '1'
        //将小鸟的div插入到小鸟的游戏界面当中
        parentObj.appendChild(this.div)
    },
    fallSpeed:0,
    flyBird: function (){
        bird.flyTimer = setInterval(fly,60)
        function fly(){
            bird.div.style.top = bird.div.offsetTop + bird.fallSpeed++  + 'px'
            if (bird.div.offsetTop >= 395){ //掉到地面，清除计时器
                bird.fallSpeed = 0
                clearInterval(bird.flyTimer)
                clearInterval(bird.wingWave)
            }
            if (bird.fallSpeed > 12) {//控制小鸟下落的最大速度
                bird.fallSpeed = 12
            }
            if(bird.div.offsetTop <= 0) {//控制小鸟不飞出界
                bird.fallSpeed = 2
                bird.div.style.top = '0px'
            }
        }
    },
    wingWave:function (){
        var up = ['url(image/img/up_bird0.png)','url(image/img/up_bird1.png)'] 
        var down = ['url(image/img/down_bird0.png)','url(image/img/down_bird1.png)']
        var i = 0,j = 0;
        bird.wingTimer = setInterval(wing,100)
        function wing(){
            if (bird.fallSpeed > 0){
                bird.div.style.backgroundImage = down[i++]
                if(i == 2){i = 0}
            }
            if (bird.fallSpeed < 0){
                bird.div.style.backgroundImage = up[j++]
                if(j == 2){j = 0}
            }
        }
    
    }
}