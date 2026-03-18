// classic string problem , check if a string is a palindrome
function isPalindrome (s){
    let left = 0;
    let right = s.length - 1;

    while (left < right ){
        if(s[left] !== s[right]){
            return false;
        }
        left ++;
        right --;
    }
    return true;
}

isPalindrome('racecar');
isPalindrome('hello')

//  similar this is to the reverse problem 
// — same pointer setup, same inward movement. 
// Only the action inside the loop changed (compare instead of swap).