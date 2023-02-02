// reverse words 
function reverseWords (str){
    const result = [];
    const words = str.split(' ');
    for( let i = words.length - 1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(' ');
    return reversed;
}


const myString = 'I am a good boy';
const output = reverseWords(myString);
console.log(output);