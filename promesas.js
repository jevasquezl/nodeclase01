const { number } = require('yargs');

const argv = require('yargs')
.option('l',
        {alias: 'limite',
         type: number,
        default: 1}
)
.check((argv, options) =>{
    if( isNaN (argv.l) ){
        throw 'no se definio el limite' ;
    }
})
.argv;

// const FuncionID = (id, callback) => {

//     const usuario = {
//         id,
//         nombre : "Julio"
//     }

//     setTimeout(() => {
//         callback (usuario);
//     }, 1000);

//     console.log(usuario);
// }


// FuncionID(10,(usuario)=>{ 
//     console.log(usuario.id);
//     console.log(usuario.nombre)
//     }    
//  );

const Empleados =[
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {
        id: 3,
        nombre: 'Maria'
    }
];

const Salarios = [
    { id: 1,
      salario: 1000},
    { id: 2,
      salario: 1000}  
    ];

const GetSalario = (i) => {
    const promesa = new Promise((resolve, reject ) => {
        const salario = Salarios.find(e => e.id === i)?.salario;
        if(salario){
            resolve(salario);
        }
        else
        {
            reject("Error: No existe Salario");
        }
    });
    return promesa;

}


const GetEmpleado = (i) => {

    const promesa = new Promise((resolve, reject ) => {
        const empleado = Empleados.find(e => e.id === i)?.nombre;
        if(empleado){
            resolve(empleado);
        }
        else
        {
            reject("Error: No existe Empleado");
        }
    });
    return promesa;
}



// GetEmpleado(1)
// .then(empleado => console.log(empleado))
// .catch( err => console.log(err));

//Promesas  en cadena


GetEmpleado(argv.l)
.then(empleado => {
    nombre = empleado;
    return GetSalario( id )})
.then(salario => console.log(nombre + " tiene un salario de : " + salario))
.catch(console.log);
