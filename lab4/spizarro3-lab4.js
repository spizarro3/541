// #1 Change the main headline
(function () {
    const heroHeader = document.querySelector("h1");
    heroHeader.innerHTML = "Supercharge Your Brand with Stellar Marketing"
})();
// #2 Change the hero headline
(function () {
    const heroBio = document.querySelector("p");
    heroBio.innerHTML = "Leverage innovative strategies from Stellar Marketing to make your business <b><i>shine</i></b> and <b><i>succeed</i></b>";
})();
// #3 Change the image in the background
(function (){
    let backgroundImg = `url("https://picsum.photos/id/683/1280/720")`
    let section = document.getElementById("hero");
    section.style.backgroundImage = backgroundImg;
})();
// #4 Change the background color of the nav bar
(function (){
    const header = document.querySelector("header");
    header.style.backgroundColor = "rgb(31, 41, 55)";
})();
// #5 Remove the CTA
(function (){
    const btn = document.querySelector('#hero a');
    btn.style.display = 'none';
})();
// #6 Change icon color
(function (){
    const icon = document.querySelectorAll("span")
    icon.forEach( x => x.style.color = "#6495ed")
})();
// #7 Change icon library 
(function (){
    const icon = document.querySelectorAll("span");
    icon[0].textContent = `ads_click`;
})();
//#8 Change display style in Specialized Marketing Solutions
(function(){
    const div = document.querySelectorAll('div')
   
    window.addEventListener('resize', function() { // Change display to flex or grid based off screen size;
        (window.innerWidth >= 1024) ? div[8].style.display = 'flex' : div[8].style.display = 'grid';
      });
})();
// #9 Change Musician's image
(function (){
    const musicImg = "https://picsum.photos/id/453/400/300"
    const div = document.querySelectorAll('div')[12];
    // div @ 12 is the musician div
    const img = div.querySelector('img')
    img.src = musicImg
})();  
// Graduate Additional Requirements
(function(){
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
      
        if(name !== "" && email !== ""){ // if name and email have value send alert
            alert(`Thank you, ${name}! We will be in touch with you shortly at ${email}`)
            }else {alert('Please provide a name and email')} // else alert users to prompt inputs
      }); 
})();