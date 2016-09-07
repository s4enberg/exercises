String.prototype.polindrome = function() {
    var i, 
        len = this.length-1;
    
    for (i = 0; i <= len; i++) {
        if (this[i] !== this[len-i]) {
            return this + " не является палиндромом";
        }

        if ((i + 1) === (len - i) || i === (len-i)) {
            return this + " является палиндромом";
        }
    }
};
