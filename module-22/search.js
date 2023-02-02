const lyrics = 'Tore mon dia mon dia agun jalaise mone moner er agun monei jole re';

const searchStr = 'Tore';
const doExist = lyrics.includes(searchStr);
console.log(doExist)

// find the index of re
console.log(lyrics.indexOf('jole'));
console.log(lyrics.indexOf('Tore'));

if (lyrics.indexOf('mon') !== -1) {
    console.log('exist inside the str');
}
else{
    console.log('does not exist')
}

// startsWith
console.log(lyrics.startsWith('Tore'))

// endsWith
console.log(lyrics.endsWith('re'))