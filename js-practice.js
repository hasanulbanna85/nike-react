const arr = [25, 30 , 5, 55, 57, 36, 90, 20, 44, 80, 27];

function largestElement(numbers){
    let max = arr[0];
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;

}

largestNumber = largestElement(arr);
console.log(largestNumber);