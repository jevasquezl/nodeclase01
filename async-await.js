const argv = require('yargs')
.option('l',
        {alias: 'limite',
         type: 'number'}
)
.check((argv, options) =>{
    if( isNaN (argv.l) ){
        throw 'no se definio el limite' ;
    }
    return true;
})
.argv;


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
      salario: 2000}  
    ];

const GetSalario = async(i) => {

    // const promesa = new Promise((resolve, reject ) => {
    //     const salario = Salarios.find(e => e.id === i)?.salario;
    //     if(salario){
    //         resolve(salario);
    //     }
    //     else
    //     {
    //         reject("Error: No existe Salario");
    //     }
    // });
    // return promesa;

    //Si es una funcion Asincrona no necesita definir la promesa
    const salario = Salarios.find(e => e.id === i)?.salario;
    return  (salario) ? salario : `No exise salario para empleado ${ i }`;

}


const GetEmpleado = async (i) => {

    // const promesa = new Promise((resolve, reject ) => {
    //     const empleado = Empleados.find(e => e.id === i)?.nombre;
    //     if(empleado){
    //         resolve(empleado);
    //     }
    //     else
    //     {
    //         reject("Error: No existe Empleado");
    //     }
    // });
    // return promesa;

    //Si es una funcion Asincrona no necesita definir la promesa
    const empleado = Empleados.find(e => e.id === i)?.nombre;
    return (empleado) ? empleado : `No exise empleado ${ i }`;
}


console.log("INICIO");
// console.log( process.argv);
// console.log( argv);


const GetInfoUusuario = async(id) =>{
    try {
        return await GetEmpleado(id)
        .then((result)=> {
            empleado = result;
            return GetSalario(id)}
            )
        .then((result)=> { 
            salario = result;
            return `Empleado ${empleado} tiene el salario ${salario}`;
        })
        .catch(console.log);
    } catch (error) {
        return error;
    }
    
}


// let id = argv.l;

GetInfoUusuario(argv.l).then(msg => console.log(msg)).catch(console.log);


console.log("FIN");