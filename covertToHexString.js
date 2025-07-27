/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    // Step 1: Handle Edge Case for 0
    if (num === 0) {
        return "0"; // Hexadecimal representation of 0 is simply "0".
    }

    // Step 2: Prepare Hexadecimal Characters
    const hexChars = "0123456789abcdef"; // Characters for hexadecimal representation.

    // Step 3: Handle Negative Numbers
    // Convert negative numbers to their unsigned 32-bit equivalent using two's complement.
    console.log(`Original number: ${num}`);
    
    if (num < 0) {
        num = num & 0xffffffff; // Convert to unsigned 32-bit integer.
    }

    console.log(`Converted to unsigned 32-bit: ${num}`);
    

    // Step 4: Convert Number to Hexadecimal
    let result = ""; // Initialize an empty string to store the hexadecimal result.
    while (num !== 0) {
        // Extract the last 4 bits of the number (these represent one hex digit).
        const hexDigit = num & 15; // 15 in binary is 1111, so this isolates the last 4 bits.
        result = hexChars[hexDigit] + result; // Map the digit to a hex character and prepend to result.
        num = num >>> 4; // Right shift the number by 4 bits to process the next hex digit.
    }

    // Step 5: Return the Result
    return result; // The final hexadecimal representation.
};

//console.log(toHex(26)); // Output: "1a"
console.log(toHex(-1)); // Output: "ffffffff"
