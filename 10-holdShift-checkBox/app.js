const checkBoxs = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastchecked;
function handleCheck(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    checkBoxs.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastchecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastchecked = this;
}

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheck);
});
