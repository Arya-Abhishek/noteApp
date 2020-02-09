const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')

//customizing the version
yargs.version('2.1.0')

//adding the note 

//challenge now I have to add body in add command handler 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body :{
            describe: 'Body of note',
            demandOption: false,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }

})

//removing the note
yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    } 
    
})

//listing the note
yargs.command({
    command: 'list',
    describe: 'List the note',
    handler() {
        notes.listNotes()
    }
})

//read the note
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

//console.log(yargs.argv)















// const validator = require('validator')
// const chalk = require('chalk')
// const log = console.log
// //defining macro

// const appNotesPrint = require('./notes')

// console.log(appNotesPrint())

// console.log(validator.isEmail('arya2001abhishekgmail.com'))

// console.log(chalk.blue.bold.inverse('Success!'))

// console.log(process.argv[2])

// const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding a note!')
// }
// else if (command === 'remove') {
//     console.log('removing note!')
// }
// // const appAddFunc = require('./utils')

// // //const name = 'Abhishek'

// // console.log(appAddFunc(5,6))