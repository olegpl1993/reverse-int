module.exports = function reverse (n) {
    if(n < 0){ //проверка на отрицательное число
        n = 0 - n; //отрицательное число меняем на положительное
    }
    let str = String(n); //число в строку
    let arr = str.split(""); //строку в массив
    let reverseArr = []; //пустой массив для заполнения
    let num = arr.length - 1; //переменная для сохранения текущего элемента копирования
    for(let i = 0; i < arr.length; i++){ //сработает количество раз сколько элементов в масиве
        reverseArr[i] = arr[num--]; //заполняем новый массив элементами в обратном порядке
    }
    let reverseStr = reverseArr.join(""); //элементы нового массива в строку
    let reverseNumber = Number(reverseStr); //строку в число
    return reverseNumber; //возврат новое число
}
