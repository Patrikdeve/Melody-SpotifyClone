
const music = new Audio('audios/NFHope.mp3');
// music.play();

const song =[
    {
        id:'0', 
        songName: 'Shoorveer 3 <div class="singer">Meetu Solanki</div>',
        poster: "images/0.jpg"
    },
    {
        id:'1', 
        songName: 'On My Way <div class="singer">Alan Walker</div>',
        poster: "images/1.jpg"
    },
    {
        id:'2', 
        songName: 'Alan Walker - Fade <div class="singer">Alan Walker</div>',
        poster: "images/2.jpg"
    },
    {
        id:'3', 
        songName: 'Cartoon - On & On<div class="singer">Daniel Levi</div>',
        poster: "images/3.jpg"
    },
    {
        id:'4', 
        songName: 'Song 4 <div class="singer">Singer4</div>',
        poster: "images/4.jpg"
    },
    {
        id:'5', 
        songName: 'Song 5 <div class="singer">Singer5</div>',
        poster: "images/5.jpg"
    },
    {
        id:'6', 
        songName: 'Song 6 <div class="singer">Singer6</div>',
        poster: "images/6.jpg"
    },
    {
        id:'7', 
        songName: 'Song 7 <div class="singer">Singer7</div>',
        poster: "images/7.jpg"
    },
    {
        id:'8', 
        songName: 'Song 8 <div class="singer">Singer8</div>',
        poster: "images/8.jpg"
    },
    {
        id:'9', 
        songName: 'Song 9 <div class="singer">Singer9</div>',
        poster: "images/9.jpg"
    },
    {
        id:'10', 
        songName: 'Song 10 <div class="singer">Singer10</div>',
        poster: "images/10.jpg"
    },
    {
        id:'11', 
        songName: 'Song 11 <div class="singer">Singer11</div>',
        poster: "images/11.jpg"
    },
    {
        id:'12', 
        songName: 'Song 12 <div class="singer">Singer12</div>',
        poster: "images/12.jpg"
    },
    {
        id:'13', 
        songName: 'Song 13 <div class="singer">Singer13</div>',
        poster: "images/13.jpg"
    },
    {
        id:'14', 
        songName: 'Song 14 <div class="singer">Singer14</div>',
        poster: "images/14.jpg"
    },
    {
        id:'15', 
        songName: 'Song 15 <div class="singer">Singer15</div>',
        poster: "images/15.jpg"
    },
    {
        id:'16', 
        songName: 'Song 16 <div class="singer">Singer16</div>',
        poster: "images/16.jpg"
    },
    {
        id:'17', 
        songName: 'Song 17 <div class="singer">Singer17</div>',
        poster: "images/17.jpg"
    },
    {
        id:'18', 
        songName: 'Song 18 <div class="singer">Singer18</div>',
        poster: "images/18.jpg"
    },
    {
        id:'19', 
        songName: 'Song 19 <div class="singer">Singer19</div>',
        poster: "images/19.jpg"
    },
    {
        id:'20', 
        songName: 'Song 20 <div class="singer">Singer20</div>',
        poster: "images/20.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('span')[0].innerHTML = song[i].songName;
})




let musicplay = document.getElementById('play');
let wave = document.getElementById('wave');

musicplay.addEventListener('click', () => {
    if(music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        musicplay.classList.remove('bi-play-circle');
        musicplay.classList.add('bi-pause-circle');
        // playingsong();
        // el.target.classList.remove('bi-vinyl-fill');
        // el.target.classList.add('bi-music-player-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        musicplay.classList.remove('bi-pause-circle');
        musicplay.classList.add('bi-play-circle');
        playingsong();
        el.target.classList.remove('bi-vinyl-fill');
        el.target.classList.add('bi-music-player-fill');

    }
});


// const musicplaybg = () => {
//     Array.from(document.getElementsByClassName('songItem')).forEach((el) => {

//     })
// }

const playingsong =() => {
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) => {
      el.classList.add('bi-vinyl-fill');
    })
}
const makesongbg =() => {
    Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
        el.style.background = '#24686b00'; 
    })
}




let index =0; 
let poster=document.getElementById('currentsongposter');
let title=document.getElementById('title');
let downloadmusic = document.getElementById('downloadmusic');
// index++; 
// console.log(index); 
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (el)=> {
        index = el.target.id; 
        // console.log(index);
        music.src = `audios/${index}.mp3`;
        poster.src = `images/${index}.jpg`;
        downloadmusic.href = `audios/${index}.mp3`;
        music.play();
        musicplay.classList.remove('bi-play-circle');
        musicplay.classList.add('bi-pause-circle');
        let songtitles= song.filter((els)=> {
           return els.id ==index; 
        })

        songtitles.forEach((elss) => {
            let {songName} = elss; 
            title.innerHTML=songName; 
            downloadmusic.setAttribute('download', songName); 
        })
        // let palyingbg = document.getElementById(`song[${index}].id`);
        // palyingbg.classList.add('active2'); 

        makesongbg(); 
        Array.from(document.getElementsByClassName('songItem'))[index].style.background ="#24686b26";
        playingsong();
        el.target.classList.remove('bi-vinyl-fill');
        el.target.classList.add('bi-music-player-fill');
        wave.classList.add('active1');
    })
})


let currentStart = document.getElementById('currentStart'); 
let currentEnd = document.getElementById('currentEnd'); 
let seek = document.getElementById('seek'); 
let bar2 = document.getElementById('bar2'); 
let dot = document.getElementById('dot'); 

music.addEventListener('timeupdate', () => {
    let music_curr = music.currentTime; 
    let music_dur = music.duration; 

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur%60); 

    if(sec1< 10) {
        sec1 =`0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60); 
    let sec2 = Math.floor(music_curr%60); 

    if(sec2<10) {
        sec2 = `0${sec2}`
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music_curr/music_dur) *100); 
    seek.value =progressbar;
    let seekbar = seek.value; 

    bar2.style.width = `${seekbar}%`; 
    dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100; 
})



let volicon = document.getElementById('volicon'); 
let volume = document.getElementById('volume'); 
let volbar2 = document.getElementById('volbar2'); 
let voldot = document.getElementsByClassName('voldot');

volume.addEventListener('change', () => {
    if(volume.value == 0) {
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.add('bi-volume-mute-fill');
    };
    if(volume.value >0 ) {
        volicon.classList.remove('bi-volume-up-fill');
        volicon.classList.add('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-mute-fill');
    };
    if(volume.value > 60 ) {
        volicon.classList.add('bi-volume-up-fill');
        volicon.classList.remove('bi-volume-down-fill');
        volicon.classList.remove('bi-volume-mute-fill');
    };

    let voli = volume.value; 
    volbar2.style.width = `${voli}%`;
    music.volume = voli/100; 
});

let back = document.getElementById('skipbackward'); 
let next = document.getElementById('skipforward'); 

back.addEventListener('click', () => {
    index -= 1;
    // index = el.target.id; 
        // console.log(index);
        if(index <0 ) {
            index = Array.from(document.getElementsByClassName('songItem')).length - 1; 
        }
        music.src = `audios/${index}.mp3`;
        poster.src = `images/${index}.jpg`;
        music.play();
        let songtitles= song.filter((els)=> {
           return els.id ==index; 
        })

        songtitles.forEach((elss) => {
            let {songName} = elss; 
            title.innerHTML=songName;  
        })
        // let palyingbg = document.getElementById(`song[${index}].id`);
        // palyingbg.classList.add('active2'); 
        makesongbg(); 
        Array.from(document.getElementsByClassName('songItem'))[index].style.background ="#24686b26";
        playingsong();
        el.target.classList.remove('bi-vinyl-fill');
        el.target.classList.add('bi-music-player-fill');
        wave.classList.add('active1');

}); 

next.addEventListener('click', () => {
    index++ ;
    // index = el.target.id; 
        // console.log(index);
        let last = Array.from(document.getElementsByClassName('songItem')).length;
        if(index >= last ) { 
            index = 0;
        };
        music.src = `audios/${index}.mp3`;
        poster.src = `images/${index}.jpg`;
        music.play();
        let songtitles= song.filter((els)=> {
           return els.id ==index; 
        })

        songtitles.forEach((elss) => {
            let {songName} = elss; 
            title.innerHTML=songName;  
        })
        // let palyingbg = document.getElementById(`song[${index}].id`);
        // palyingbg.classList.add('active2'); 
        makesongbg(); 
        Array.from(document.getElementsByClassName('songItem'))[index].style.background ="#24686b26";
        playingsong();
        el.target.classList.remove('bi-vinyl-fill');
        el.target.classList.add('bi-music-player-fill');
        wave.classList.add('active1');
})





let popsongs_left = document.getElementById('popsongs_left');
let popsongs_right = document.getElementById('popsongs_right');
let popsongs = document.getElementsByClassName('popsongs')[0];

popsongs_right.addEventListener('click', () => {
    popsongs.scrollLeft +=50;
})
popsongs_left.addEventListener('click', () => {
    popsongs.scrollLeft -= 50;
});


let singer_left = document.getElementById('singerleft');
let singer_right = document.getElementById('singerright');
let singers = document.getElementsByClassName('singers')[0];

singer_right.addEventListener('click', () => {
    singers.scrollLeft +=30;
})
singer_left.addEventListener('click', () => {
    singers.scrollLeft -= 30;
});


let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', () => {
    let a = shuffle.innerHTML; 
    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat'); 
            shuffle.classList.remove('bi-music-note-beamed'); 
            shuffle.classList.remove('bi-shuffle'); 
            shuffle.innerHTML = 'repeat'; 
            break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat'); 
            shuffle.classList.remove('bi-music-note-beamed'); 
            shuffle.classList.add('bi-shuffle'); 
            shuffle.innerHTML = 'random'; 
            break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat'); 
            shuffle.classList.add('bi-music-note-beamed'); 
            shuffle.classList.remove('bi-shuffle'); 
            shuffle.innerHTML = 'next'; 
            break;
    }
})

let like = document.getElementsByClassName('like')[0]; 
like.addEventListener('click', () => {
    let a = like.innerHTML; 
    switch (a) {
        case "liked":
            like.classList.remove('bi-heart'); 
            like.classList.add('bi-heart-fill');
            like.innerHTML='unlike';
            break;
        case "unlike":
            like.classList.add('bi-heart'); 
            like.classList.remove('bi-heart-fill');
            like.innerHTML='liked';
            break;
    }
}); 

const next_music = ()=> {
    if(index == song.length-1){
        index = 0; 
    } else {
        index++; 
    }
    // console.log(index);
    music.src = `audios/${index}.mp3`;
    poster.src = `images/${index}.jpg`;
    downloadmusic.href = `audios/${index}.mp3`;
    music.play();
    musicplay.classList.remove('bi-play-circle');
    musicplay.classList.add('bi-pause-circle');
    let songtitles= song.filter((els)=> {
       return els.id ==index; 
    })

    songtitles.forEach((elss) => {
        let {songName} = elss; 
        title.innerHTML=songName; 
        downloadmusic.setAttribute('download', songName); 
    })
    // let palyingbg = document.getElementById(`song[${index}].id`);
    // palyingbg.classList.add('active2'); 

    makesongbg(); 
    Array.from(document.getElementsByClassName('songItem'))[index].style.background ="#24686b26";
    playingsong();
    el.target.classList.remove('bi-vinyl-fill');
    el.target.classList.add('bi-music-player-fill');
    wave.classList.add('active1');
}
const repeat_music = ()=> {
    index;
    // console.log(index);
    music.src = `audios/${index}.mp3`;
    poster.src = `images/${index}.jpg`;
    downloadmusic.href = `audios/${index}.mp3`;
    music.play();
    musicplay.classList.remove('bi-play-circle');
    musicplay.classList.add('bi-pause-circle');
    let songtitles= song.filter((els)=> {
       return els.id ==index; 
    })

    songtitles.forEach((elss) => {
        let {songName} = elss; 
        title.innerHTML=songName; 
        downloadmusic.setAttribute('download', songName); 
    })
    // let palyingbg = document.getElementById(`song[${index}].id`);
    // palyingbg.classList.add('active2'); 

    makesongbg(); 
    Array.from(document.getElementsByClassName('songItem'))[index].style.background ="#24686b26";
    playingsong();
    el.target.classList.remove('bi-vinyl-fill');
    el.target.classList.add('bi-music-player-fill');
    wave.classList.add('active1');
}
const random_music = ()=> {
    if(index == song.length-1) {
        index = 0; 
    } else {
        index = Math.floor((Math.random)*song.length); 
    }
    // console.log(index);
    music.src = `audios/${index}.mp3`;
    poster.src = `images/${index}.jpg`;
    downloadmusic.href = `audios/${index}.mp3`;
    music.play();
    musicplay.classList.remove('bi-play-circle');
    musicplay.classList.add('bi-pause-circle');
    let songtitles= song.filter((els)=> {
       return els.id ==index; 
    })

    songtitles.forEach((elss) => {
        let {songName} = elss; 
        title.innerHTML=songName; 
        downloadmusic.setAttribute('download', songName); 
    })
    // let palyingbg = document.getElementById(`song[${index}].id`);
    // palyingbg.classList.add('active2'); 

    makesongbg(); 
    Array.from(document.getElementsByClassName('songItem'))[index].style.background ="#24686b26";
    playingsong();
    el.target.classList.remove('bi-vinyl-fill');
    el.target.classList.add('bi-music-player-fill');
    wave.classList.add('active1');
}; 

music.addEventListener('ended', () => {
   let b = shuffle.innerHTML; 

   switch (b) {
    case 'repeat':
        repeat_music(); 
        break;
    case 'next':
        next_music(); 
        break;
    case 'random':
        random_music(); 
        break;  
   }
})







