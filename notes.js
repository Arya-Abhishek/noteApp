const fs = require('fs')
const chalk = require('chalk')

// const getNotes = function() {
//     return 'Your Notes...'
// }

//concise es6 version of above function
getNotes = () => 'Your Notes...'

addNotes = (title, body) => {
    const notes = loadNotes()
    //loaded the notes

    //provision for checking duplicate nodes so that it can't be added again
    //const duplicateNotes = notes.filter((note) => note.title === title)

    //more efficient function that stops when it finds a match
    const duplicateNote = notes.find((note) => note.title === title)
    //this will grab single note at a time as note and will check its arguments specifically the title
    // and will match with given new note's title 

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('note added successfully'))
    } else {
        console.log('Note title taken!')
    }

    // console.log(notes)
}

removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter( function(note) {
        return note.title !== title
    })

    if (notes.length > notesToKeep.length ) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed successfully!'))
    } else {
        console.log(chalk.red.inverse('can\'t be removed'))
    }
}

listNotes = () => {
    const listNotes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes!'))
    listNotes.forEach((cur) => {
        console.log(cur.title)
        // console.log('title: ' + cur.title)
        // console.log('body: ' + cur.body)
    })
}

readNote = (title) => {
    const listNotes = loadNotes()
    //now we have all nodes in our variable listNodes
    const readData = listNotes.find((note) => note.title === title)

    //now in readData contains that note for which our title matches
    if (readData) {
        //means we have found our note
        //only thing we have to console log this
        console.log(chalk.italic.blue(readData.title), chalk.green(readData.body))
    }
    else {
        console.log(chalk.red.inverse('NOTE NOT FOUND!'))
    }

}

//As we need to store data at different locations hence we are using different function
saveNotes = (notes) => {
    console.log(notes)
    //now I need to save notes node to our json database
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}