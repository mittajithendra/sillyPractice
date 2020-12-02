const notes = require('./notes');
const chalk = require('chalk');
const validator = require('validator');
const yargs = require('yargs');

//const fs = require('fs');

//fs.writeFileSync('notes.txt','My name is Jithu');

//fs.appendFileSync('notes.txt',"I append this to existing file.");

// console.log(notes());

// console.log(validator.isEmail('mitta@gmail.com'));

// console.log(validator.isURL('https://google.c'))

// const greetMsg = chalk.yellow.inverse.bold('Fail!');
// const msg = chalk.green.bold('Success!');
// console.log(greetMsg);
// console.log(msg);



//console.log(process.argv);



yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'property values',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'listnotes',
    describe: 'List notes',
    handler(argv){
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title); 
    }
})

yargs.parse()
//console.log(yargs.argv);
// execute command ' node app.js --title="Things to buy" '
// execute command ' node app.js add" '

//customize args version
