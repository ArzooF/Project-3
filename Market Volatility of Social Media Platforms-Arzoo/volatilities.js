document.addEventListener("DOMContentLoaded", () => {
    fetch("http://127.0.0.1:5000/volatilities").then(response => {
        if (!response.ok) {
            console.log("Error fetching data")
        }
        return response.json()
    }) 
    .then(data => {
        console.log(data)
    })
})
