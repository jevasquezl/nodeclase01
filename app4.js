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
    }
];



const Salarios = [
    { id: 1,
      salario: 1000},
    { id: 2,
      salario: 1000}  
    ];

const GetSalario = (i, callback) => {

    // const salario = Salarios.find(e => e.id === i);
    const salario = Salarios.find(e => e.id === i)?.salario;
    if(salario){
    //    callback(null, salario.salario)
        callback(null, salario)
    }
    else
    {
        callback("Error")
    }

}


GetSalario(1, (err, salario)=>{ 
        if(err){
                console.log('ERROR')
        }
        else
        {
            console.log(salario)
        }
    }
);
    


const GetEmpleado = (i, callback) => {

    const empleado = Empleados.find(e => e.id === i)?.nombre;

    if(empleado){
        callback(null, empleado)
    }
    else
    {
        callback("Error")
    }

}


GetEmpleado(1, (err, empleado)=>{ 
        if(err){
                console.log('ERROR')
        }
        else
        {
            console.log(empleado)
        }
    }
);