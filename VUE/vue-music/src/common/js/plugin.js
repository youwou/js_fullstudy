let Toast = {}
Toast.install = function(Vue,options) {
let opt = {
    defaultType: 'center',//默认显示的位置
    duration:'1500'//持续的时间
}

for (let property in options) {
    opt[options] = options[property]//options.property
}

Vue.property.$toast = (tips,type) => {
    if () {
        
    }
}
}