function number_to_ordinal(number){
    var suffix = "th";
    if (number == 0) suffix = "";
    if (number % 10 == 1 && number % 100 != 11) suffix = "st";
    if (number % 10 == 2 && number % 100 != 12) suffix = "nd";
    if (number % 10 == 3 && number % 100 != 13) suffix = "rd";
    return number + suffix;
}

function scrabble_score(str){
    const scores = {
        'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
        'D': 2, 'G': 2,
        'B': 3, 'C': 3, 'M': 3, 'P': 3,
        'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
        'K': 5,
        'J': 8, 'X': 8,
        'Q': 10, 'Z': 10,
    }
      
    const add = (a, b) => a + b
    const value = (letter) => scores[letter]
    
    const score = (word) =>
    word ? word.toUpperCase().split('').map(value).reduce(add) : 0

    return score(str);
}

module.exports = {
    number_to_ordinal, 
    scrabble_score
}
