function solution(my_string) {
    let string = String(my_string)
    let arr = string.split('')
    arr = arr.reverse()
    arr = arr.join('')
    return arr;
}