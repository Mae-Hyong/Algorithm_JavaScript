function solution(s) { 
    s = s.split(' ')
    Max = Number(s[0])
    Min = Number(s[0])
    for(i = 1; i <= s.length; i++){
        if(Max < Number(s[i])){
            Max = Number(s[i])
        } else if(Min > Number(s[i])){
            Min = Number(s[i])
        }
    }
    return String(Min) + " " + String(Max)
}