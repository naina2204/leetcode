function smallestNumber(n, t) {
    while (true) {
        let product = 1;
        let temp = n;
        
        // Calculate the product of digits
        while (temp > 0) {
            product *= temp % 10;
            temp = Math.floor(temp / 10);
        }
        
        // Check if the product is divisible by t
        if (product % t === 0) {
            return n;
        }
        
        n++; // Move to the next number
    }
}
