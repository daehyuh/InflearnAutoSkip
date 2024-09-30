function test() {
  // 다음 강의 있는지 확인 -> 강의 끝나면 더 이상 진행 안되도록 하기 위함
  var nextButton = document.querySelector("#root > main > div > footer > div > div > button.mantine-UnstyledButton-root.mantine-Button-root.mantine-c5w2vi");
  if (!nextButton){
    return;
  }
  skip();
}

function skip() {
  // 다음 강의 수강하기 버튼 클릭
  var a = document.getElementsByClassName('mantine-UnstyledButton-root mantine-Button-root css-x644ap');
  
  if (a.length == 1) {
      a[0].click();
  }

  // 재생 바 보이도록 설정
  var controlsContainer = document.querySelector('#player-container > div.css-2pste9.mantine-1avyp1d > div > div.shaka-controls-container');
  if (controlsContainer) {
    controlsContainer.setAttribute("shown","true");
  }

  // Play 버튼으로 실행 여부 판단 -> 강제 실행
  var playButtonIcon = document.querySelector('#play-pause-button-ui > div > button > svg');
  if (playButtonIcon && playButtonIcon.getAttribute('data-icon') == 'play') {
    document.querySelector('#play-pause-button-ui > div > button').click();
  }

  // 끝으로 이동
  var video = document.querySelector('#player-container video');  
  if (video) {
    video.currentTime = video.duration; // 동영상을 끝으로 이동
  }
}

const interval = setInterval(() => test(), 2000);