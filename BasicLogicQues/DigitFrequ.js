function DigitFrequency(n) {
    var count = 0, digit = 5;
    while (n > 0) {
        repeat = n % 10;
        n = n / 10;
        if (digit == repeat)
            count = count + 1

        //console.log(count);
    }
    console.log(count);

}
DigitFrequency(54535);