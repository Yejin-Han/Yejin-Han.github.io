<h1>Web Portfolio</h1>
<p>
저의 프로필 페이지를 제작하였습니다.
<br>
저에 대한 간단한 소개 및 타임라인(학력, 자격증), 스킬, 지금까지 진행한 프로젝트들에 대한 간단한 설명이 담겨있습니다.
<br>
<br>
마우스의 움직임/스크롤에 따라 반응하는 인터랙티브한 페이지 디자인을 하였으며, GSAP 라이브러리를 활용한 스크롤 애니메이션과 배경 효과가 있습니다.
</p>
<a href="https://yejin-han.github.io/">웹 포트폴리오 바로가기</a>
<br>
<br>
<br>
<h2>🗓️ 제작 기간</h2>
> 2023. 02. 06. ~ 2023. 04. 18.
<h2>📸 완성 화면</h2>
  <div align="center"><img alt="완성화면" src="/capture/profile1.jpg" /></div>
<h2>🛠 활용 tool 및 language</h2>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>Javascript</li>
    <li>SCSS</li>
    <li>GSAP</li>
    <li>VS Code</li>
    <li>Photoshop</li>
  </ul>
<br>
<h2>📚 화면 구조</h2>
  <ul>
    <li>cursor</li>
    <li>petal_container</li>
    <li>header</li>
    <li>Section 1 : Main Visual</li>
    <li>Section 2 : About</li>
    <li>Section 3 : Project</li>
    <li>Section 4 : Contact</li>
    <li>footer</li>
  </ul>
<h2>📋 구현 기능</h2>
<h3>cursor, petal_container, header, Main_visual</h3>
  <div align="center"><img alt="main_visual" src="/capture/profile_1.gif" /></div>
  <ul>
    <li>실제 마우스 커서 대신 마우스 좌표에 따라 움직이는 도형을 추가하여 커서 역할을 하도록 하였습니다.</li>
    <li>GSAP 라이브러리를 이용하여 화면 안에 꽃잎이 휘날리는 효과를 넣고 이를 fixed 선언하여 스크롤을 내려도 보이도록 하였습니다.</li>
    <li>로고에 마우스를 갖다대면 로고가 빙글빙글 회전합니다.</li>
  </ul>
<h3>About</h3>
  <div align="center"><img alt="about" src="/capture/profile_2.gif" /></div>
  <ul>
    <li>스크롤을 내리면 프로필 사진이 타임라인을 따라 이동합니다.</li>
    <li>Skills의 하위 div(아이콘의 모음)에 마우스를 갖다대면 마우스의 이동방향대로 div가 rotate합니다.</li>
  </ul>
<h3>Project</h3>
  <div align="center"><img alt="project" src="/capture/profile_3.gif" /></div>
  <ul>
    <li>Project의 일정 부분에 진입하면 물결모양 path를 따라 텍스트가 이동합니다.</li>
    <li>Project에 진입하면 전체적인 색상이 반전되며, 프로젝트 제목에 마우스를 갖다대면 커서가 커지면서 색상이 흰색으로 바귀고 그 안의 텍스트가 검정색으로 보이게 됩니다.</li>
    <li>프로젝트 제목을 클릭하면 세부 내용이 펼쳐지며 우측 상단의 X버튼을 눌러야 접힙니다. (일반 토글 아코디언은 내용을 보다가 실수로 내용을 접을 수 있으므로 접힘 버튼을 따로 만듦)</li>
    <li>반응형을 구현한 프로젝트는 PC, Tablet, Mobile 버튼이 있어 각 화면 사이즈에 대한 미리보기 이미지를 볼 수 있습니다.</li>
    <li>Project 영역에서 벗어나면 다시 색상이 원래대로 돌아옵니다.</li>
  </ul>
<h3>Contact, footer</h3>
  <div align="center"><img alt="contact" src="/capture/profile_4.gif" /></div>
  <ul>
    <li>GSAP 라이브러리를 이용하여 은은하게 배경에서 블러 처리된 공이 움직이는 효과를 넣었습니다.</li>
    <li>메인 텍스트가 끊임없이 이어지는 CSS 애니메이션을 구현하였습니다.</li>
    <li>연락 수단에 마우스를 갖다대면 화살표가 드러나는 CSS 애니메이션을 구현하였습니다.</li>
    <li>스크롤을 조금이라도 내리면 우측 하단에 scroll to top 버튼이 활성화되어 누르면 맨 위로 스크롤됩니다.</li>
  </ul>
<br>
<br>
<h2>💡 추가하고 싶은 사항</h2>
<p>Main visual의 text에 parallex scrolling을 적용해보고 싶었으나 페이지 구조 상 마땅한 아이디어가 떠오르지 않아 추가하지 못함.</p>
