---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
page: index
title: Hey it's Silvia
---
{% include navbar.html %}

<div class="banner">
    <div class="banner-line1">
      <h1>Hey</h1>
    </div>
    <div class="banner-line2">
      <h1>it's <span>Silvia</span></h1>
    </div>
    <div class="banner-subtitle">
      <h2>(</h2>
        <p>I’m a front end web developer based <br>in Barcelona, Spain 🇪🇸</p>
      <h2>)</h2>
    </div>
    <div class="banner-lineround">
      <h3 class="circle-text">Front-end</h3>
      <h4 class="light-circle-text">developer</h4>
    </div>
    <img src="/assets/images/next.png" class="next-arrow"/>
</div>

<div id="aboutme" class="section">
  <div class="aboutme-container">
    <div class="aboutme-card">
      <h1>About me</h1>
      <img src="/assets/images/underline.png" class="underline-aboutme"/>
      <img src="/assets/images/avatar.jpg" class="avatar" style="width: 20%;"/>
      <div class="aboutme-box">
        <div class="aboutme-text">
          <p>Hey, it's me <span>Silvia</span>! Learning is my passion and that's exactly what got me from learning different languages and cultures, to learn how to code. I am passionate about beautiful things and that's exactly what I want to do for a living: <span>create beautiful websites</span> where people can feel like they are in a different reality.
          <br>
          <br>I'm always exited about <span>helping other's vision come to life</span> that's why after graduating from my <span>Fullstack web development bootcamp</span> at Le Wagon Barcelona, I decided to become a <span>front end developer</span> and, at the same time, keep on learning by enrolling in a <span>UX/UI Design Master degree</span> at Three Points Digital Bussiness School.
          <br>
          <br>I truly believe all my past experiences and studies have helped me to become a <span>versatile professional</span> and I can't wait to keep on creating amazing websites and challenge myself everyday.
          </p>
          <div class="sign">
            Silvia&nbsp;&nbsp;Salat.
            <div class="fadingEffect"></div>
          </div>
        </div>
        <div class="knowledge">
          <h2 class="learnt">What do I know?</h2>
          <div>
            <div class="line1-logos">
              <div class="tooltip">
                <img src="/assets/images/ruby.png"/><span class="tooltiptext">Ruby on Rails</span>
              </div>
              <div class="tooltip">
                <img src="/assets/images/bootstrap.svg"/><span class="tooltiptext">Bootstrap</span>
              </div>
              <div class="tooltip">
                <img src="/assets/images/html.png"/><span class="tooltiptext">HTML & CSS</span>
              </div>
            </div>
            <div class="line2-logos">
              <div class="tooltip">
                <img src="/assets/images/sass.png"/><span class="tooltiptext">Sass</span>
              </div>
              <div class="tooltip">
                <img src="/assets/images/js.png"/><span class="tooltiptext">JavaScript</span>
              </div>
              <div class="tooltip">
                <img src="/assets/images/figma.png"/><span class="tooltiptext">Figma</span>
              </div>
              <div class="tooltip">
                <img src="/assets/images/marvel.png"/><span class="tooltiptext">Marvel</span>
              </div>
            </div>
          </div>
          <h2>Who do I want to become?</h2>
          <h4 class="wordCarousel">
            <span>I want to become amazing at: </span>
            <div>
                <ul class="flip4">
                    <li>Creating clean code!</li>
                    <li>Testing code!</li>
                    <li>REST APIs!</li>
                    <li>Js Frameworks!</li>
                </ul>
            </div>
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="work" class="section">
  <div class="work-container">
    <img src="/assets/images/work-arrow.png" class="work-arrow"/>
    <div class="work-header">
      <h1>Let me show you</h1>
      <h1 class="work-header-line2">some of my favourite works.</h1>
      <img src="/assets/images/work-circle.png" class="work-circle"/>
    </div>
    <div class="carousel-container">
      <div class="panel active" style="background-image: url('/assets/images/spotlight.png'); cursor: pointer;" onclick="window.open('http://www.spotlight-connect.com/');">
        <a class="btn" href="http://www.spotlight-connect.com/">Go to project</a>
      </div>
      <div class="panel" style="background-image: url('/assets/images/danisalat.png'); cursor: pointer;" onclick="window.open('http://danisalat.com/');">
        <a class="btn" href="https://silsc.github.io/">Go to project</a>
      </div>
      <div class="panel" style="background-image: url('/assets/images/rent.png'); cursor: pointer;" onclick="window.open('http://rentyourchef.herokuapp.com/');">
        <a class="btn" href="http://rentyourchef.herokuapp.com/">Go to project</a>
      </div>
    </div>
    <div class="workshow">
      <div class="workcards-container">
        <div class="workcard" style="background-image: url('/assets/images/spotlight.png'); cursor: pointer;" onclick="window.location='http://www.spotlight-connect.com/';">
          <h3>SpotLight</h3>
        </div>
        <div class="workcard" style="background-image: url('/assets/images/danisalat.png'); cursor: pointer;" onclick="window.location='https://danisalat.netlify.app/';">
          <h3>Dani Salat</h3>
        </div>
      </div>
      <div class="workcards-container">
        <div class="workcard" style="background-image: url('/assets/images/rent.png'); cursor: pointer;" onclick="window.location='http://rentyourchef.herokuapp.com/';">
          <h3>Rent your chef</h3>
        </div>
        <!-- <div class="workcard" style="background-image: url('/assets/images/spotlight.png'); cursor: pointer;" onclick="window.location='http://www.spotlight-connect.com/';">
          <h3>SpotLight</h3>
        </div> -->
      </div>
    </div>
    </div>
  </div>
</div>

<div id="contact">
  <div class="contact-header-container section">
    <div class="contact-header">
      <h1>Say hello and</h1>
      <h1 class="contact-header-line2">let’s collaborate!</h1>
      <img src="/assets/images/circle.png" class="contact-circle"/>
    </div>
  </div>
    <div class="contact-info-container">
      <div class="email-box">
        <h3>If you prefer talking through email</h3>
        <img src="/assets/images/underline.png" class="underline-email"/>
        <a href="mailto:salat.silvia@gmail.com?subject=Hello Silvia!">
        <div class="email">
          <img src="/assets/images/email.png" class="email-icon"/>
          <h4>salat.silvia@gmail.com</h4>
        </div>
        </a>
        <img src="/assets/images/contact-arrow1.png" class="contact-arrow1"/>
      </div>
      <div class="social-box">
        <h3>If you’re more into social media</h3>
        <img src="/assets/images/underline.png" class="underline-sns"/>
        <div class="contact-icons">
          <a href="https://www.linkedin.com/in/silviasalatcasado/">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.16663 11.825C4.16663 9.7939 4.97348 7.84597 6.4097 6.40976C7.84592 4.97354 9.79384 4.16668 11.825 4.16668H88.1666C89.1732 4.16504 90.1702 4.36194 91.1006 4.74613C92.0309 5.13031 92.8764 5.69422 93.5885 6.40558C94.3006 7.11694 94.8655 7.96178 95.2507 8.89172C95.6359 9.82167 95.8338 10.8185 95.8333 11.825V88.1667C95.8344 89.1734 95.637 90.1705 95.2523 91.1009C94.8677 92.0313 94.3034 92.8767 93.5917 93.5888C92.88 94.3009 92.0349 94.8657 91.1047 95.2508C90.1745 95.6359 89.1776 95.8339 88.1708 95.8334H11.825C10.8189 95.8334 9.8227 95.6351 8.89328 95.25C7.96386 94.8649 7.11942 94.3004 6.40823 93.5888C5.69703 92.8772 5.13301 92.0325 4.74839 91.1029C4.36376 90.1732 4.16608 89.1769 4.16663 88.1709V11.825ZM40.45 39.1167H52.8625V45.35C54.6541 41.7667 59.2375 38.5417 66.125 38.5417C79.3291 38.5417 82.4583 45.6792 82.4583 58.775V83.0333H69.0958V61.7584C69.0958 54.3 67.3041 50.0917 62.7541 50.0917C56.4416 50.0917 53.8166 54.6292 53.8166 61.7584V83.0333H40.45V39.1167ZM17.5333 82.4625H30.9V38.5417H17.5333V82.4584V82.4625ZM32.8125 24.2167C32.8377 25.3612 32.634 26.4991 32.2135 27.5638C31.7929 28.6285 31.1639 29.5985 30.3634 30.4168C29.5629 31.2351 28.607 31.8853 27.5519 32.3292C26.4967 32.7731 25.3635 33.0018 24.2187 33.0018C23.074 33.0018 21.9407 32.7731 20.8856 32.3292C19.8304 31.8853 18.8745 31.2351 18.074 30.4168C17.2735 29.5985 16.6445 28.6285 16.224 27.5638C15.8034 26.4991 15.5998 25.3612 15.625 24.2167C15.6744 21.9702 16.6016 19.8325 18.2078 18.2612C19.8141 16.6899 21.9717 15.8101 24.2187 15.8101C26.4657 15.8101 28.6234 16.6899 30.2296 18.2612C31.8359 19.8325 32.763 21.9702 32.8125 24.2167Z" fill="#757570"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/hey.itssilvia/">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1041 4.44167C35.9916 4.21667 37.55 4.16667 50 4.16667C62.45 4.16667 64.0083 4.22084 68.8916 4.44167C73.775 4.66251 77.1083 5.44167 80.025 6.57084C83.0791 7.72501 85.85 9.52917 88.1416 11.8625C90.475 14.15 92.275 16.9167 93.425 19.975C94.5583 22.8917 95.3333 26.225 95.5583 31.1C95.7833 35.9958 95.8333 37.5542 95.8333 50C95.8333 62.45 95.7791 64.0083 95.5583 68.8958C95.3375 73.7708 94.5583 77.1042 93.425 80.0208C92.2749 83.0796 90.472 85.8508 88.1416 88.1417C85.85 90.475 83.0791 92.275 80.025 93.425C77.1083 94.5583 73.775 95.3333 68.9 95.5583C64.0083 95.7833 62.45 95.8333 50 95.8333C37.55 95.8333 35.9916 95.7792 31.1041 95.5583C26.2291 95.3375 22.8958 94.5583 19.9791 93.425C16.9205 92.2748 14.1492 90.4719 11.8583 88.1417C9.52654 85.8528 7.7221 83.0829 6.57079 80.025C5.44163 77.1083 4.66663 73.775 4.44163 68.9C4.21663 64.0042 4.16663 62.4458 4.16663 50C4.16663 37.55 4.22079 35.9917 4.44163 31.1083C4.66246 26.225 5.44163 22.8917 6.57079 19.975C7.7238 16.917 9.52962 14.1471 11.8625 11.8583C14.1501 9.52709 16.9186 7.72269 19.975 6.57084C22.8916 5.44167 26.225 4.66667 31.1 4.44167H31.1041ZM68.5208 12.6917C63.6875 12.4708 62.2375 12.425 50 12.425C37.7625 12.425 36.3125 12.4708 31.4791 12.6917C27.0083 12.8958 24.5833 13.6417 22.9666 14.2708C20.8291 15.1042 19.3 16.0917 17.6958 17.6958C16.1751 19.1752 15.0049 20.9762 14.2708 22.9667C13.6416 24.5833 12.8958 27.0083 12.6916 31.4792C12.4708 36.3125 12.425 37.7625 12.425 50C12.425 62.2375 12.4708 63.6875 12.6916 68.5208C12.8958 72.9917 13.6416 75.4167 14.2708 77.0333C15.0041 79.0208 16.175 80.825 17.6958 82.3042C19.175 83.825 20.9791 84.9958 22.9666 85.7292C24.5833 86.3583 27.0083 87.1042 31.4791 87.3083C36.3125 87.5292 37.7583 87.575 50 87.575C62.2416 87.575 63.6875 87.5292 68.5208 87.3083C72.9916 87.1042 75.4166 86.3583 77.0333 85.7292C79.1708 84.8958 80.7 83.9083 82.3041 82.3042C83.825 80.825 84.9958 79.0208 85.7291 77.0333C86.3583 75.4167 87.1041 72.9917 87.3083 68.5208C87.5291 63.6875 87.575 62.2375 87.575 50C87.575 37.7625 87.5291 36.3125 87.3083 31.4792C87.1041 27.0083 86.3583 24.5833 85.7291 22.9667C84.8958 20.8292 83.9083 19.3 82.3041 17.6958C80.8247 16.1753 79.0237 15.005 77.0333 14.2708C75.4166 13.6417 72.9916 12.8958 68.5208 12.6917ZM44.1458 64.1292C47.4152 65.4901 51.0557 65.6738 54.4455 64.6488C57.8353 63.6239 60.7641 61.4538 62.7317 58.5093C64.6992 55.5649 65.5835 52.0286 65.2335 48.5046C64.8834 44.9806 63.3208 41.6874 60.8125 39.1875C59.2134 37.5895 57.28 36.3659 55.1513 35.6048C53.0227 34.8437 50.7517 34.564 48.502 34.7859C46.2523 35.0078 44.0798 35.7257 42.1408 36.888C40.2019 38.0504 38.5447 39.6281 37.2887 41.5077C36.0327 43.3873 35.2091 45.522 34.8771 47.7582C34.5451 49.9943 34.7131 52.2762 35.3689 54.4397C36.0247 56.6031 37.152 58.5942 38.6696 60.2697C40.1873 61.9451 42.0576 63.2633 44.1458 64.1292ZM33.3416 33.3417C35.5292 31.1541 38.1263 29.4188 40.9845 28.2348C43.8428 27.0509 46.9062 26.4416 50 26.4416C53.0937 26.4416 56.1571 27.0509 59.0154 28.2348C61.8736 29.4188 64.4707 31.1541 66.6583 33.3417C68.8459 35.5293 70.5812 38.1263 71.7651 40.9846C72.949 43.8428 73.5584 46.9063 73.5584 50C73.5584 53.0937 72.949 56.1572 71.7651 59.0154C70.5812 61.8737 68.8459 64.4707 66.6583 66.6583C62.2402 71.0764 56.248 73.5584 50 73.5584C43.7519 73.5584 37.7597 71.0764 33.3416 66.6583C28.9236 62.2403 26.4415 56.2481 26.4415 50C26.4415 43.7519 28.9236 37.7597 33.3416 33.3417ZM78.7833 29.95C79.3254 29.4386 79.7594 28.8237 80.0596 28.1416C80.3597 27.4594 80.52 26.724 80.5309 25.9789C80.5417 25.2337 80.403 24.494 80.1228 23.8034C79.8426 23.1128 79.4268 22.4855 78.8998 21.9585C78.3728 21.4315 77.7455 21.0157 77.0549 20.7355C76.3643 20.4553 75.6246 20.3166 74.8794 20.3274C74.1343 20.3383 73.3988 20.4986 72.7167 20.7987C72.0346 21.0989 71.4197 21.5329 70.9083 22.075C69.9137 23.1293 69.3693 24.5297 69.3904 25.9789C69.4115 27.4281 69.9966 28.812 71.0214 29.8368C72.0463 30.8617 73.4302 31.4468 74.8794 31.4679C76.3286 31.489 77.729 30.9445 78.7833 29.95Z" fill="#757570"/>
            </svg>
          </a>
          <a href="https://github.com/silsc/">
            <svg viewBox="0 0 100 109" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M89.2857 6.8125H10.7143C4.79911 6.8125 0 11.3896 0 17.0312V91.9688C0 97.6104 4.79911 102.188 10.7143 102.188H89.2857C95.2009 102.188 100 97.6104 100 91.9688V17.0312C100 11.3896 95.2009 6.8125 89.2857 6.8125ZM61.8973 88.4986C60.0223 88.818 59.3304 87.7109 59.3304 86.7955C59.3304 85.6459 59.375 79.7701 59.375 75.0227C59.375 71.7016 58.2143 69.5939 56.8527 68.4869C65.1116 67.6141 73.817 66.5283 73.817 52.9246C73.817 49.05 72.3661 47.1127 70 44.6219C70.3795 43.7064 71.6518 39.9383 69.6205 35.0418C66.5179 34.1264 59.4196 38.8525 59.4196 38.8525C56.4732 38.0648 53.2812 37.6604 50.1339 37.6604C46.9866 37.6604 43.7946 38.0648 40.8482 38.8525C40.8482 38.8525 33.75 34.1264 30.6473 35.0418C28.6161 39.917 29.8661 43.6852 30.2679 44.6219C27.9018 47.1127 26.7857 49.05 26.7857 52.9246C26.7857 66.4645 35.1116 67.6141 43.3705 68.4869C42.2991 69.4023 41.3393 70.9777 41.0045 73.2344C38.8839 74.1498 33.4598 75.7252 30.2232 70.2752C28.192 66.9115 24.5312 66.6348 24.5312 66.6348C20.9152 66.5922 24.2857 68.8063 24.2857 68.8063C26.6964 69.8707 28.3929 73.9582 28.3929 73.9582C30.558 80.2811 40.9152 78.1522 40.9152 78.1522C40.9152 81.1113 40.9598 85.9227 40.9598 86.7955C40.9598 87.7109 40.2902 88.818 38.3929 88.4986C23.6607 83.7938 13.3482 70.4242 13.3482 54.798C13.3482 35.2547 29.0179 20.4162 49.5089 20.4162C70 20.4162 86.6071 35.2547 86.6071 54.798C86.6295 70.4242 76.6295 83.815 61.8973 88.4986ZM40 75.491C39.5759 75.5762 39.1741 75.4059 39.1295 75.1291C39.0848 74.8098 39.375 74.533 39.7991 74.4479C40.2232 74.4053 40.625 74.5756 40.6696 74.8523C40.7366 75.1291 40.4464 75.4059 40 75.491ZM37.8795 75.2994C37.8795 75.5762 37.5446 75.8104 37.0982 75.8104C36.6071 75.8529 36.2723 75.6188 36.2723 75.2994C36.2723 75.0227 36.6071 74.7885 37.0536 74.7885C37.4777 74.7459 37.8795 74.9801 37.8795 75.2994ZM34.8214 75.0652C34.7321 75.342 34.2857 75.4697 33.9062 75.342C33.4821 75.2568 33.192 74.9375 33.2812 74.6607C33.3705 74.384 33.817 74.2563 34.1964 74.3414C34.6429 74.4691 34.933 74.7885 34.8214 75.0652ZM32.0759 73.9156C31.875 74.1498 31.4509 74.1072 31.1161 73.7879C30.7812 73.5111 30.692 73.1066 30.9152 72.915C31.1161 72.6809 31.5402 72.7234 31.875 73.0428C32.1652 73.3195 32.2768 73.7453 32.0759 73.9156ZM30.0446 71.9783C29.8438 72.1061 29.4643 71.9783 29.2187 71.659C28.9732 71.3397 28.9732 70.9777 29.2187 70.8287C29.4643 70.6371 29.8438 70.7861 30.0446 71.1055C30.2902 71.4248 30.2902 71.808 30.0446 71.9783ZM28.5938 69.9133C28.3929 70.1049 28.058 69.9984 27.8125 69.7855C27.567 69.5088 27.5223 69.1894 27.7232 69.0404C27.9241 68.8488 28.2589 68.9553 28.5045 69.1682C28.75 69.4449 28.7946 69.7643 28.5938 69.9133ZM27.0982 68.3379C27.0089 68.5295 26.7188 68.5721 26.4732 68.423C26.183 68.2953 26.0491 68.0611 26.1384 67.8695C26.2277 67.7418 26.4732 67.6779 26.7634 67.7844C27.0536 67.9334 27.1875 68.1676 27.0982 68.3379Z" fill="#757570"/>
            </svg>
          </a>
        </div>
        <img src="/assets/images/contact-arrow2.png" class="contact-arrow2"/>
      </div>
      <a href="/assets/cv.pdf" target="blank">
        <div class="cv">
          <img src="/assets/images/circle-cv.png" class="circle-cv"/>
          <h4>You can also check my cv by clicking here</h4>
        </div>
      </a>
    </div>
</div>

