import validator from 'validator';
const newPassword = (form) => {
    var obj=null;
    if (form["mail"].value === "") {
        obj = { id: "mail", error: form["mail"].text + " is requried" };
    }
    else
        if (!validator.isEmail(form["mail"].value))
            obj = { id: "mail", error: form["mail"].text + " is not valid" };
    for (let x in form) {
        const inputError = { ...form[x] };
        inputError.valid = true;
        form[x] = inputError;
    }
    if (obj !== null) {
        const inputError = { ...form[obj.id] };
        inputError.valid = false;
        form[obj.id] = inputError;
        return obj;
    }
    return null;
}
export default newPassword;