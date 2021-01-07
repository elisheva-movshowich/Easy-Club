import isIsraeliIdValid from 'israeli-id-validator'
import validator from 'validator';
const validValue = (value, validation, id, text) => {
    const obj = { id: id, error: text + " is not valid" };
    if (validation.mail) {
        if (!validator.isEmail(value))
            return obj;
    }
    if (validation.tz) {
        if (!isIsraeliIdValid(value))
            return obj;
    }
    if (validation.password) {
        if (value.length < 6)
            return { id: id, error: text + " must have at least 6 characters" };
    }
    if (validation.phone) {
        if (!validator.isMobilePhone(value))
            return obj;
    }
    if (validation.url) {
        if (!validator.isURL(value))
            return obj;
    }
    if (validation.img) {
      //  console.log(value.length)
        if (value.length > 1000000)
            return { id: id, error: "Please upload an image of 1MB the most" };
    }
    return null;
}
export default validValue;