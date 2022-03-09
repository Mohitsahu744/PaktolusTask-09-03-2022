
//=======================Import module=================================



// const add = require('./utils')

// const sum = add(4, -2)

// console.log(sum)


// =====================Validator===================================


// const validator = require('validator')
// const getNotes = require('./notes.js')

// // const msg = getNotes()
// // console.log(msg) 

// console.log(validator.isEmail('andrew@example.com')) //True
// // console.log(validator.isEmail('example.com')) //false

// // console.log(validator.isURL('https://mead.io')) //True


//====================Chalk library==================================

// const chalk = require ('chalk')
// const greenMsg = chalk.green('Success')
// console.log(greenMsg)




// ====================Lecture 4====================================

// console.log(process.argv[2])



// const command = process.argv[2]

// console.log(process.argv)

// if(command === 'add'){
//     console.log('Adding Notes!')
// }
// else if (command === 'remove'){
//     console.log('Removing note!')
// }


//==================Yargs library=================================


const yargs = require("yargs")
const notes = require('./notes.js')
console.log(process.argv)

// Costomize yargs version

yargs.version('1.1.0')

// Create add command
debugger
yargs.command({
    command : 'add',
    describe :'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption : true,
            type : 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }

    },
    
    handler : function(argv){
        // console.log('Title:' + argv.title)
        // console.log('Body:' + argv.body)

        notes.addNote(argv.title, argv.body)
    }

})


// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{

        }
    },
    handler: function() {
        console.log('Removing the note')
    }
})

//create list command
yargs.command({
    command :'List',
    describe : 'List your notes',
    handler: function() {
        console.log('Listing out all notes')
    }
})

// Create read command

yargs.command({
    command: 'read',
    describe: 'Read a node',
    handler: function(){
        console.log('Reading a note ')
    }
})

yargs.parse()

// console.log(yargs.argv)