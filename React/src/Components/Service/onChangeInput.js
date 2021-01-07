
const onChangeInput = (e,inputChanged,form,id) => {
    if (!inputChanged.validation["pattern"].test(e.target.value)) {
        e.target.value = inputChanged.value
    }
    else
        inputChanged.value = e.target.value;
    form[id] = inputChanged;
}
export default onChangeInput;