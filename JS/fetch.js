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
    const sec = time % 60;
    const min = Math.floor(time / 60);
    const hours = Math.floor(min / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    if (time < 60) {
        return `${time} seconds ago`;
    } else if (min < 60) {
        return `${min} minutes and ${sec} seconds ago`;
    } else if (hours < 24) {
        return `${hours} hours and ${min % 60} minutes ago`;
    } else if (days < 30) {
        return `${days} days ago`;
    } else if (months < 12) {
        return `${months} months ago`;
    } else {
        return `${years} years ago`;
    }
};



// DIsplay Button in web fatch from fetchCategories() line 2
function displayFetchButton(data) {

    data.forEach(element => {
        const btnContainer = document.getElementById('buttonsContainer');
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `<button>${element.category}</button>`
        btnDiv.classList = 'btn '
        btnDiv.onclick = async() => {
            alert('Reza')

        const musicRes= await fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${element.category_id}`) 
        const musicdata=await musicRes.json();
        displayALlVideo(musicdata.category
        )  


        }
        btnContainer.append(btnDiv)
    });
}

// Display All video COntent in web fetch from fetchAllVIdeo() line 8;

const displayALlVideo = (data) => {
    const videosContaner = document.getElementById('videosContaner');
    videosContaner.innerHTML = "";
    data.forEach(element => {
         
        const div = document.createElement('div');
      
        div.innerHTML = `
    <figure class="h-[200px] object-cover relative">
    <img class="w-full h-full"
      src="${element.thumbnail 
            } "
      alt="Shoes"/>

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