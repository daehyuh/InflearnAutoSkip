function test() {
  var a = document.getElementsByClassName('mantine-UnstyledButton-root mantine-Button-root css-x644ap ');
  if (a.length == 1) {
      a[0].click();
  }
}

setInterval(() => test(), 3000);