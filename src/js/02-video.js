import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

function onTimeUpdate (currentTime){
    const currentSeconds = currentTime.seconds;
    localStorage.setItem("LOCAL_STORAGE_KEY", JSON.stringify(currentSeconds));
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));

const timeFromLocalStorage = JSON.parse(localStorage.getItem("LOCAL_STORAGE_KEY"));

player.setCurrentTime(timeFromLocalStorage || 0);

