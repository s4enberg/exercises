function end(number, endingArr) {
    var i, 
        ending, 
        currentNum = number;
    
    number = number % 100;
    
    if (number >= 11 && number <= 19) {
        ending = currentNum + " " + endingArr[2];
    } else {
        i = number % 10;
        
        switch (i) {
            case (1): ending = currentNum + " " + endingArr[0]; break;
            case (2):
            case (3):
            case (4): ending = currentNum + " " + endingArr[1]; break;
            default: ending = currentNum + " " + endingArr[2];
        }
    }
    return ending;
}
