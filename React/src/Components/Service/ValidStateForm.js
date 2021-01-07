import validValue from '../Service/ValidValue';
const validForm = (form) => {
    for (let x in form) {
        if (form[x].validation.required) {
            if (form[x].value === "" ||(form[x].type==="number" && isNaN(form[x].value)) ) {
                return { id: x, error: form[x].text + " is requried" };
            }
        }
        const valid = validValue(form[x].value, form[x].validation, x, form[x].text);
        if (valid !== null)
            return valid;
        else
            if (form[x].validation.confirm_password) {
                if (form["password"].value !== form[x].value)
                    return { id: "confirm_password", error: form["confirm_password"].text + " is incorrect" }
            }
    };
    return null;
}
export default validForm;



