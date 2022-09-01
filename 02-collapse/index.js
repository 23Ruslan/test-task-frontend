document.querySelector(".collapsible__content").style.overflow = 'hidden';

const myInterval = 750;                                                          // animation time in milliseconds
const myAnimation = document
  .querySelector(".collapsible__content")
  .animate(
    { 
        width: ["0px", "900px"]
    },
    { 
        duration: myInterval,                                                          
        fill: "both", 
        easing: "ease-out" 
    }
);

myAnimation.pause();

document.querySelector(".collapsible__button").addEventListener("click", () => {
    if (myAnimation.playState == "paused")                                       // hiding and showing with animation
        myAnimation.play();                                                      // animation for opening
    else
        myAnimation.reverse();                                                   // animation for closing                                 
});

myAnimation.onfinish = (evt) => {
  console.log(                                                                   // for testing and debugging
    "completed",
    evt.currentTime == 0 ? "...closed..." : "...opened..."
  );
};