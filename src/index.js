module.exports = function reverse (n) {
    if(n < 0){ //проверка на отрицательное число
        n = 0 - n; //отрицательное число меняем на положытельное
    }
    let str = String(n); //число в строку
    let arr = str.split(""); //строку в массив
    let reverseArr = []; //пустой массив для заполнение
    let num = arr.length - 1; //переменная для сохранения текущего елемента копирования
    for(let i = 0; i < arr.length; i++){ //сработает количество раз сколько елементов в масиве
        reverseArr[i] = arr[num--]; //заполняем новый массив елементами в обратном порядке
    }
    let reverseStr = reverseArr.join(""); //елементы нового массива в строку
    let reverseNumber = Number(reverseStr); //строку в число
    return reverseNumber; //возврат новое число
}
