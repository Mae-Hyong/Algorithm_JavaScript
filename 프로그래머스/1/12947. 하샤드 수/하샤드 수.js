function solution(x) {
    var sum = 0
    var str = x.toString().split('')
    for(i = 0; i < str.length; i++){
        sum += Number(str[i])
    }
    return x % sum === 0
}