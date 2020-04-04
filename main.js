//fetch("http://alexandersdesign.dk/wordpress/wp-json/wp/v2/bike?_embed=title,content")
//    .then(res => res.json())
//    .then(loopThroughbikes)
//
//function loopThroughbikes(bike) {
//    console.log(bike)
//    bike.forEach(showBike => {
//        const template = document.querySelector("template").content;
//        const copy = template.cloneNode(true);
//        copy.querySelector("h2").textContent = bike.title;
//        copy.querySelector("h1").textContent = bike.title.content.rendered;
//        copy.querySelector("img").src = bike._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;
//        copy.querySelector(".body").innerHTML = bike.content.rendered;
//        document.querySelector("main").appendChild(copy)
//    })
//}

fetch("http://alexandersdesign.dk/wordpress/wp-json/wp/v2/bike?per_pages=100&_embed")
    .then(res => res.json())
    .then(handleData)

function handleData(bike) {
    console.log(bike);
    bike.forEach(showBike)
}

function showBike(bike) {
    console.log(bike)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = bike.title.rendered;

    copy.querySelector(".bikeName").textContent = bike.tittle;



    //        copy.querySelector("img").src = bike._embedded["wp:featuredmedia"][0].media_details.sizes.medium_large.source_url





    document.querySelector("main").appendChild(copy);


}
