const validCheckbox = (checkbox) => {
    if (checkbox !== true) {
        return { id: "Checkbox", error:"Checkbox is requried" };
    }
    return null;
}
export default validCheckbox;