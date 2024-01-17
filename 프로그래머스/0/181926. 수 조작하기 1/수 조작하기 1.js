function solution(n, control) {
    control = control.replaceAll('w', "+1")
    control = control.replaceAll('s', "-1")
    control = control.replaceAll('d', "+10")
    control = control.replaceAll('a', "-10")
    return n+eval(control);
}