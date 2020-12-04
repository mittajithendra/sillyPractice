const chalk = require('chalk');
const fs = require('fs');

const getNotes = () => {
    return "This is my Notes";
}

const addNote = (title,body) => {
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note)=> note.title == title )
    const duplicateNote = notes.find((note)=> note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body,
        })
        console.log(notes);
        saveNotes(notes);
        console.log(chalk.green('successfully inserted'));
    }
    else{
        console.log(chalk.red("Title already in use"));
    }

    
    
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch(e){
        return [];

    }
    
}

const readNote = (title) => {
    const notes = loadNotes();

    const note = notes.find((note)=> note.title == title );
    if(note){
        console.log(chalk.green.inverse(note.body));
    }else{
        console.log(chalk.red.inverse("There is no such note on :"+title));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(element => {
        console.log(chalk.green.inverse(element.title));
    });
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const removeNote = (title) => {
    const notes = loadNotes();
    const initialLen = notes.length;
    const haveNote = notes.filter((note)=> note.title !== title)
    if(haveNote.length != initialLen){
        fs.writeFileSync('notes.json',haveNote);
        console.log(chalk.green("Notes with title : "+title+" removed"));
    }
    else{
        console.log(chalk.red('No such note on title'));
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};