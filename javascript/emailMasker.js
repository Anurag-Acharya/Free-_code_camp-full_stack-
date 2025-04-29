function maskEmail(email) {
    let searchTerm = "@";
    if (email.includes(searchTerm)) {
        let maskChar = "*";
        const startPart = email.slice(0, 1);    
        const endPart = email.slice(email.indexOf("@")-1);       
        const maskedLength = email.length - (startPart.length + endPart.length);
        const maskedPart = maskChar.repeat(maskedLength);      
        return startPart + maskedPart + endPart;
    } else {
        return "You have invalid email.";
    }
}

let email = "anuragdoy123@gmail.com";
console.log(maskEmail(email));
