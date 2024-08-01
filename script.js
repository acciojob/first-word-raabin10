function firstWord(s) {
 
	 if (s.length === 0) {
        return '';
    }
    
    // Find the index of the first space
    let spaceIndex = s.indexOf(' ');
    
    // If there is no space, return the whole string
    if (spaceIndex === -1) {
        return s;
    } 
    
    // Return the substring from the start to the first space
    return s.substring(0, spaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
