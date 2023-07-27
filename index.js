const Persona = require("./clases/Persona.js");


(async () => {
    try {
        // Método que nos permite crear la tabla en la Base de datos
        await Persona.sync()

        // Métodos Build y Save para insertar registros en la tabla
        // const persona1 = Persona.build({
        //     rut: '12.345.678-5',
        //     nombre: 'María',
        //     apellido: 'Ramírez'
        // })
        // await persona1.save()


        // Método Create para insertar registros en la tabla
        // const registroPersona = await Persona.create({
        //     rut:"33.333.333-3",
        //     nombre: "Luisa",
        //     apellido: "Roa"
        // })
        // console.log("***************************************");
        // console.log("RegistroPersona",registroPersona.id);
        // console.log("***************************************");


        // Método BulkCreate para insertar varios regisros en la tabla
        // const listadoPersonas = [
        //     { rut: "44.444.444-4", nombre: "Juan", apellido:"Gutierrez"},
        //     { rut: "55.555.555-5", nombre: "Mónica", apellido:"Alvarado"},
        //     // { rut: "66.666.666-6", nombre: "Luis", apellido:"Parra"}
        // ]
        // await Persona.bulkCreate(listadoPersonas)



        // Método findAll para consultar varios registros de la tabla
        // const listadoCompleto = await Persona.findAll({ raw: true})
        // const listadoOrdenado = await Persona.findAll({ raw: true, 
        //         order:[
        //             ["rut","ASC"],
        //             // ["nombre","ASC"]
        //         ]
        // })
        // console.table(listadoOrdenado);

        // Método findByPK para consultar condicionando por la clave primaria
        const consulta1 = await Persona.findByPk(2)
        if(consulta1) {
            // console.log(consulta1.get({ plain: true}));
        }

        // Método findOne para consultar 1 registro
        const consulta2 = await Persona.findOne({ 
            // where: {
            //     id: 1
            // },
            order: [
                ["rut","ASC"]
            ]
        })
        if(consulta2){
            // console.log(consulta2.get({ plain: true}));
        }


        // Método update para modificar registros
        // await Persona.update({ nombre: "Mónica", apellido: "Alvarez"}, 
        //     { 
        //         where: {
        //             id: 13
        //         }
        //     }
        // )

        // Método destroy para eliminar registros
        await Persona.destroy({ 
            where: {
                id: 13
            }
        })


        console.log("Ejecución exitosa")
    } catch (error) {
        console.log(error);
    }
})()