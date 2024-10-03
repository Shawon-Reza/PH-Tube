// Fetch Categories Data 
async function fetchCategories() {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    const data = await res.json();
    displayFetchButton(data.categories)
} fetchCategories()

// Fetch all Video content 
const fetchAllVIdeo = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    const data = await res.json();
    displayALlVideo(data.videos)
}
fetchAllVIdeo();
// Time Update call from 63 line
const getTime = (time) => {
    const min = Math.floor(time / 60);
    const hour = Math.floor(min / 60);
    const days = Math.floor(hour/30)
    const month = Math.floor(days / 30)
    const year = Math.floor(month / 30);
    const decade = Math.floor(year / 30);
    const sec = time % 60;
    if(min>24 && hour<24) {
        return `${hour} hour ${min%60} min ago`;
    }
    else if(hour>24){
        return `${days} days ${hour%24} hour ago`;
    }

     else {
        return `${min} min ${sec} sec ago`;
    }

};


// DIsplay Button in web fatch from fetchCategories() line 2
function displayFetchButton(data) {

    data.forEach(element => {
        const btnContainer = document.getElementById('buttonsContainer');
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `<button>${element.category}</button>`
        btnDiv.classList = 'btn '
        btnContainer.append(btnDiv)
    });
}

// Display All video COntent in web fetch from fetchAllVIdeo() line 8;

const displayALlVideo = (data) => {
    data.forEach(element => {
        const videosContaner = document.getElementById('videosContaner');
        const div = document.createElement('div');
        div.innerHTML = `
    <figure class="h-[200px] object-cover relative">
    <img class="w-full h-full"
      src="${element.thumbnail
            }"
      alt="Shoes" />

      ${element.others?.posted_date?.length == 0 ? "" : `<span class="absolute bottom-2 right-4 text-white px-1 rounded-full bg-slate-600">${getTime(element.others?.posted_date)}</span>`}
      
      


  </figure>

  <div class="card-body">
    <div class="flex gap-10 md:gap-5">
    <figure  class="h-10 w-10  rounded-full ">
            <img src="${element.authors[0].profile_picture} class="h-2 w-2 rounded-full">
    </figure>
        <div class="" >
            <h1 class="font-bold text-xl">${element.title}</h1>

            <div class="flex justify-center items-center gap-2">
             <p class="opacity-70">${element.authors[0].profile_name}</p>

            ${element.authors[0].verified === true ? `<figure class="h-5 w-5">
             <img class="" src="https://img.icons8.com/?size=100&id=yXOHowNYbgM5&format=png&color=000000">
             </figure>`: ""}

             </div>
            <p class="opacity-70">${element.others.views} views</p>
        </div>
        
    </div>
  </div>`
        div.classList = 'card bg-base-100 shadow-xl'
        videosContaner.append(div)
    });
}