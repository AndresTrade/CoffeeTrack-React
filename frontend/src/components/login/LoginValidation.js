function Validation(values){
    let error = {}
    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-z0-9]{8,}$/; 

    if(values.email === ""){
        error.email = "Este espacio no debe estar vacio"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "El email no corresponde"
    }else{
        error.email = ""
    }

    if(values.password === ""){
        error.password = "Este espacio no debe estar vacio"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "El password no corresponde"
    }else{
        error.password = ""
    }

    return error;
}


export default Validation;