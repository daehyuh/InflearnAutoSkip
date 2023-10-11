function test() {
  var a = document.getElementsByClassName('mantine-UnstyledButton-root mantine-Button-root css-x644ap');
  
  if (a.length == 1) {
      a[0].click();
  }

  document.querySelector('#player-container > div.css-2pste9.mantine-1avyp1d > div > div.shaka-controls-container').setAttribute("shown","true")
  
  if (document.querySelector('#play-pause-button-ui > div > button > svg').getAttribute('data-icon') == 'play'){
    document.querySelector('#play-pause-button-ui > div > button').click();
  }
  
}

setInterval(() => test(), 3000);