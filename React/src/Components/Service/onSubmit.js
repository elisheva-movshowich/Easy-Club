import validForm from "./ValidStateForm";
const onSignUp = (form) => {
    const obj = validForm(form);
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
export default onSignUp;