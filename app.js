const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');


// Sidebar elements //
const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')
const button = document.querySelector('.btn');


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", ()=>{
    sidebar.classList.remove("close-sidebar")
    sidebar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", ()=>{
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
    
})
document.querySelectorAll('.sidebar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open-sidebar');
    sidebar.classList.add('close-sidebar');
  });
});
