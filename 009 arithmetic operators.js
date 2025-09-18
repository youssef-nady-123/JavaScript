/*
    ==============================
    == 009 arithmetic operators ==
    ==============================
    + addition 
    - subtraction 
    * multiplication
    / division
    % modulus (division reminder)
    ** exponentiation 
    -- decrement [post / pre]
    ++ increment [post / pre]
*/

    console.log("osama" + 10);      // osama10
    console.log("osama"*20);        // Nan
    console.log("osama" - 10);      // NaN

    console.log(10+20);     // 30
    console.log(20-10);     // 10
    console.log(10*10);     // 100
    console.log(20/5);      // 4
    console.log(2**3);      // 8
    console.log(15%2);      // 1

    /*
    The increment operator (++) adds 1 from the operand.
        If it is placed after the operand, it returns the value before the increment.
        If it is placed before the operand, it returns the value after the increment

    The decrement operator (--) subtracts 1 to the operand.
        If it is placed after the operand, it returns the value before the decrement.
        If it is placed before the operand, it returns the value after the decrement 
    */

    let x = 10;
    console.log(x++);      // 10
    console.log(x);        // 11
    console.log(x--);      // 11
    console.log(x);        // 10