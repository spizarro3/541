(function () {
    // code here
    const heroHeader = document.querySelector("h1");
    heroHeader.innerHTML = "Supercharge Your Branch with Stellar Marketing"
})();

(function () {
    const heroBio = document.querySelector("p");
    heroBio.innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <b><i>shine</i></b> and <b><i>succeed</i></b>";
})();

(function (){
    let backgroundImg = `url("https://picsum.photos/id/683/1280/720")`
    let section = document.getElementById("hero");
    section.style.backgroundImage = backgroundImg;
})();

(function (){
    const header = document.querySelector("header");
    header.style.backgroundColor = "rgb(31, 41, 55)";
})();

(function (){
    const btn = document.querySelector('#hero a');
    btn.style.display = 'none';
})();

(function (){
    const icon = document.querySelectorAll("span")
    icon.forEach( x => x.style.color = "#6495ed")
    icon[0].textContent = `ads_click`
})();

/// this is where I left off. it's the 8th div and we want to have all the baby divs in a row
(function(){
    const div = document.querySelectorAll('div')
   
    window.addEventListener('resize', function() {
        
        (window.innerWidth >= 1024) ? div[8].style.display = 'flex' : div[8].style.display = 'grid';
        //console.log(div[8].style.display)
      });

})();

(function (){
    const musicImg = "https://picsum.photos/id/453/400/300"
    const div = document.querySelectorAll('div')[12];
    // div @ 12 is the musician div
    const img = div.querySelector('img')
    img.src = musicImg
})();  

(function(){
    const btn = document.querySelector("button");
    btn.attributes
    btn.style.backgroundColor = "black"
    btn.href = "www.google.com"
    console.log(btn)
    btn.addEventListener("click", () =>{
        console.log("clicked")
    })
})();