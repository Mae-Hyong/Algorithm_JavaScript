function solution(a, b) {
    var answer = 0;
    return Number(String(a)+String(b)) >= Number(String(b)+String(a)) ? Number(String(a)+String(b)):Number(String(b)+String(a));
}