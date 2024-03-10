function solution(a, b) {
    if(a === b) return a;
    else if(a > b){
        for(i = b; i < a; i++){
            b += i+1;
        }
        return b;
    } else {
        for(i = a; i < b; i++){
            a += i+1;
        }
        return a;
    }
}