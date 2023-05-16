const N = process.argv[2]

function fizz_buzz(n){
    let array = []
    for (let index = 1; index <= n ; index++) {

        let item = index
        if((index % 3 == 0) && (index % 5 == 0)) {
            item = "FizzBuzz";
        } else if(index % 3 == 0) {
            item = "Fizz"
        } else if (index % 5 == 0) {
            item = "Buzz";
        }
        array.push(item)

    }
     
    return array
}
  
console.log(fizz_buzz(N))