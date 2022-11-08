console.log("Welcome to TheMixTape");
let songindex=0;
let currval=0;
let audioElement=new Audio('cheapthrills.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let mastersong=document.getElementById('mastersong');
let songItems= Array.from(document.getElementsByClassName('songItem'));
let songItemPlay=document.getElementsByClassName('songItemPlay')

let songs=[
    {songname:"Ajj Din Chadheya", filepath:"song/Aj_din.mp3",coverpath:"covers/5.jpg"},
    {songname:" Ek Din Aap (Yes Boss)", filepath:"song/Ek_Din_Aap.mp3",coverpath:"covers/4.jpg"},
    {songname:"Ek Din Teri Raahon (Naqaab)", filepath:"song/Ek_din_teri.mp3",coverpath:"covers/1.jpg"},
    {songname:"Saibo  by Shreya Ghoshal", filepath:"song/Saibo.mp3",coverpath:"covers/2.jpg"},
    {songname:"Rangisari", filepath:"song/Rangi_sari.mp3",coverpath:"covers/3.jpg"},
    {songname:"Cheapthrills", filepath:"song/cheapthrills.mp3",coverpath:"covers/9.png"},
    {songname:"Baby", filepath:"song/Baby.mp3",coverpath:"covers/8.jpg"},
    {songname:"Let me love you", filepath:"song/Let_me_love.mp3",coverpath:"covers/6.jpg"},
    {songname:"Perfect", filepath:"song/Perfect.mp3",coverpath:"covers/7.jpg"},
    {songname:"Perfect", filepath:"song/Perfect.mp3",coverpath:"covers/7.jpg"}

]
songItems.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;
});

//audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
       
    }
})
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeallplays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
       element.classList.add('fa-play-circle'); 
       element.classList.remove('fa-pause-circle');
    })
}
// const makeallpause=()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.classList.add('fa-pause-circle'); 
//     element.classList.remove('fa-play-circle');
//      })
// }
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click',(e)=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      makeallplays();
      songindex=parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src=`song/${songindex}.mp3`;
      mastersong.innerText=songs[songindex-1].songname;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');}
    
    else{
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-pause-circle');
        e.target.classList.add('fa-play-circle');
        audioElement.pause();
        gif.style.opacity=0;
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
   })
})


document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=1;
    }
    else{
        songindex+=1;
    }
      audioElement.src=`song/${songindex}.mp3`;
      mastersong.innerText=songs[songindex-1].songname;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=1){
        songindex=9;
    }
    else{
        songindex-=1;
    }
      audioElement.src=`song/${songindex}.mp3`;
      mastersong.innerText=songs[songindex-1].songname;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})

 