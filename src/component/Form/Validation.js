

function Validation(form, errors, setErrors) {
    // /^[^\s@]+@[^\s@]+.[^\s@]+$/

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/
    const longitudMaxima = 35;
    const contraRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;

    if (!form.password) {

    if (!form.username) {
        setErrors({ ...errors, username: "El nombre de usuario no puede estar vacío" });
        }
    else if (!emailRegex.test(form.username)) {
        setErrors({ ...errors, username: "El nombre de usuario debe ser un correo electrónico válido" });
        }
    else if (form.username.length > longitudMaxima) {
        setErrors({ ...errors, username: "El nombre de usuario no puede tener más de 35 caracteres" })
        } else {
        setErrors({ ...errors, username: "" })
                }



        // Verificar que el nombre de usuario sea un correo electrónico válido
        // Verificar que el nombre de usuario no esté vacío
        //trim elimina los espacios
        // Verificar que el nombre de usuario no tenga más de 35 caracteres
    } else {

        // --------------password------------//

        
    if (form.password.length < 6 || form.password.length > 10) {
        setErrors({ ...errors, password: "La contraseña tiene que tener una longitud entre 6 y 10 caracteres." })
        }
    else if (!contraRegex.test(form.password)) {
        setErrors({ ...errors, password: "La contraseña tiene que tener al menos un número y una letra en Mayuscula." })
    } else {
        setErrors({ ...errors, password: "" })
        }
    }
    return {...form};
}


export default Validation;

