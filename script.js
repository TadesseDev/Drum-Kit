window.addEventListener('keydown',(e)=>{
    const audio=document.querySelector(`audio[data-key='${e.keyCode}']`);
    const Element=document.querySelector(`div[data-key='${e.keyCode}']`);
    audio.currentTime=0;
    audio.play();
    Element.classList.add(`playing`);
    Element.addEventListener("transitionend", endit);
    function endit(){
        this.classList.remove("playing");
        /* in an event listener call this key work refers to an element recived the event */
    }
});