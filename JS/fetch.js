// Fetch Categories Data 
async function fetchCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json();
    displayFetchButton(data.categories)
}
fetchCategories()



// DIsplay Button in web fatch from fetchCategories()
function displayFetchButton(data) {

    data.forEach(element => {
        const btnContainer = document.getElementById('buttonsContainer');
        // console.log(btnContainer)
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML=`<button>${element.category}</button>`
        btnDiv.classList='btn '
        btnContainer.appendChild(btnDiv)
    });

}