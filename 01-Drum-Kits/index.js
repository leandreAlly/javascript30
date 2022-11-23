window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-keys="${e.keyCode}"]`);
  audio.play();
});
