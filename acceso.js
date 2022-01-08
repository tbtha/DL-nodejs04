const yargs = require("yargs");
const child = require("child_process");

const key = 123

const argv = yargs.command(
    'servidor',
    'Comando para subir el servidor',
    {
        key:{
            describe:'key',
            demand: true,
            alias:'k'
        },
    },
    (args) =>{
        args.key == key ?
        child.exec('nodemon server.js' , (err,stdout) => {
            err ? console.log(err) : console.log(stdout)
        })
        :
        console.log('Key incorrecta')
    }


)
.help().argv

// node acceso.js servidor --key=123
// https://picsum.photos/200/300 