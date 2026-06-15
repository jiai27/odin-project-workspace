/**
 * rewrite the sumOfTripledEvens(array) function
 */

function isEven(num){
    /**     purpose:        determines if a number is even or not
     *      parameters:     a number
     *      returns:        true or false if its an even
     */
    return num % 2 === 0;    //returns true if remainder is 0 (even)
}



function sumOfTripledEvens(array){
    /**     purpose:        takes an array of ints, for each even, triple it and sum them
     *      parameters:     an array (specifically the pointer to the beginning)
            returns:         
    */     

    let evens = array.filter(isEven)
    console.log(evens)
    //let sum = evens.reduce((total,3) => {
    //    return total;
    //}, 0)
    //console.log(sum)


}


console.log("start test")
let test_arr = [1,2,3,4,5]
console.log(sumOfTripledEvens(test_arr))