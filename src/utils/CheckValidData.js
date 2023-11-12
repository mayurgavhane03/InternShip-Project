

export const CheckValidData =  (email, password) => {

    //REGEX VALIDATION CHECK
    const isEmailValid =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); // this text the email is valid or not
    const isPassValid =    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(password);
  

   
    if(!isEmailValid)
        return "email is not valid"
    if(!isPassValid)
        return "password is not valid";
    return null;



}