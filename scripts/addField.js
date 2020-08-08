//search button
document.querySelector("#add-time")
//by clicking in button
.addEventListener('click', cloneField)


//start action
function cloneField() {

    //duplicate the fields
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    //get the fields
    const fields = newFieldContainer.querySelectorAll('input')

    //for each field, clean
    fields.forEach(function(field) {

        //get the current field and clean
        field.value = ""
    })
    
    //put it in page
    document.querySelector("#schedule-items").appendChild(newFieldContainer)


}