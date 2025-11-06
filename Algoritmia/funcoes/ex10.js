function getMin(...nums) {
    let menor = nums[0];
    for (i of nums) {
        if (i < menor) {
            menor = i;
        }
    }

    return menor;
}

console.log(getMin(1, -2, 10));
console.log(getMin(-Infinity, 10));
console.log(getMin(1, "Hello", 10));

//TEM Q REVER