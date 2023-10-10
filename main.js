function test() {
  var a = document.getElementsByClassName('mantine-UnstyledButton-root mantine-Button-root css-x644ap');
  if (a.length == 1) {
      a[0].click();
  }
  document.getElementsByClassName('playback-rate__slider css-1yxwq3l')[0].setAttribute("max",1000);
}

setInterval(() => test(), 3000);