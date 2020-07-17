/**
 * 功能：计算年收益
 * @author clx
 * @data 2020-7-16
 * @params 第一部分(salary 工资 number)
 * 第二部分（level 评级 string）
 * @return 返回值是年收益 number
 */
function calculateBonus(salary,level = 'C'){
    //console.log(arguments)

   
    console.log(typeof(salary - 0));
   // if(arguments.length < 2){
     //  throw new Error('传数不正确，请检查工资及等级');
   // }
    if(typeof salary != 'number' || salary < 0){
        throw new TypeError('工资必须是整数');

    }
   // if(['A','B','C','D'].indexof(level) == -1){
   //     throw new Error('错误的等级')
   // }
    salsry = parseInt(salary);


    if(level =='D'){
        return salary * 16;
    }else if(level == 'B'){
        return salary * 18;
    }else if(level == 'A'){
        return salary * 20;
    }else if(level == 'S'){
        return salary * 100
    }
    
    return salary * 16;

}
console.log(calculateBonus(20000));