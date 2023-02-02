const lyrics =  'Tore mon dia mon dia. agun jalaise mone. moner er agun monei jole re';

const words = lyrics.split(' ');
const sentences = lyrics.split('.');
const char = lyrics.split('');
// console.log(char)

const partial = lyrics.slice(5,9);

const partial1 =lyrics.substring(5,22);
// console.log(partial1)

// target remove white spaces from variable

const firstName = '    Shamim';
const lastName = 'Islam';

const fullName = firstName +" "+ lastName;
const sol = fullName;
console.log(sol.trim());

const lines = [
    'Tore mon dia mon dia',
    'Agun jalaise mone',
    'Moner er agun monei jole re'
];
const favSong = lines.join('. ');
// console.log(favSong)

// target concat two string using build in objects

const jaanFristName = 'Jannat';
const jaanLastName = 'Mim';

const jaanFullName = jaanFristName.concat(' ',jaanLastName);
console.log(jaanFullName);