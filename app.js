let form = document.getElementById('user-form')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    let userData = {};
    [...this.elements].forEach(el => {
        userData[el.name] = el.value
    })
    console.log(userData); 
    this.reset()
})