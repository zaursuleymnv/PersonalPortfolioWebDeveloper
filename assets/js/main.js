
// Initialize Swiper
let swiper = new Swiper(".testimonial-wrapper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    mousewheel: true,
    keyboard: {
        enabled: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },
  });

const navMenu = document.querySelector('.nav-menu')
      navToggle = document.querySelector('.nav-toggle-btn')
      navCloseBtn = document.querySelector('.nav-close-btn')
      navLinks = document.querySelectorAll('.nav-link')

if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if(navCloseBtn) {
  navCloseBtn.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

function linkAction() {
  navMenu.classList.remove('show-menu')
}
navLinks.forEach(e => e.addEventListener('click', linkAction))

$(document).ready(function() {
  $(window).scroll(function(e) {
    if($(this).scrollTop() > 80) {  
        $('header nav').addClass('header-fixed')
        $('#back2Top').fadeIn()
    }
    else {
        $('header nav').removeClass('header-fixed')
        $('#back2Top').fadeOut()
    }
  })

  $('#back2Top').click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
  })
})



const theme = document.querySelector('#theme-button')
const themeModal = document.querySelector('.customize-theme')

//open modal 
const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

//close modal
const closeThemeModal = (e) => {
  if(e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}

theme.addEventListener('click', openThemeModal)
themeModal.addEventListener('click', closeThemeModal)

// Font Arrange
const fontSizeChange = document.querySelectorAll('.choose-size span')

const removeSizeSelector = () => {
  fontSizeChange.forEach(e => {
    e.classList.remove('active')
  })
}

fontSizeChange.forEach(e => {
  
  e.addEventListener('click', () => {

    removeSizeSelector();

    e.classList.toggle('active')

    let fontSize;
    if(e.classList.contains('font-size-1')) {
      fontSize = '12px'
    }
    else if(e.classList.contains('font-size-2')) {
      fontSize = '14px'
    }
    else if(e.classList.contains('font-size-3')) {
      fontSize = '16px'
    }
    else if(e.classList.contains('font-size-4')) {
      fontSize = '18px'
    }

    document.querySelector('html').style.fontSize = fontSize
  })
})




//Color Arrange
const colorPalette = document.querySelectorAll('.choose-color span')
const root = document.querySelector(':root')

const removeActiveColorClass = () => {
  colorPalette.forEach(e => {
    e.classList.remove('active')
  })
}

colorPalette.forEach(color => {

  color.addEventListener('click', () => {
    removeActiveColorClass();

    let primaryHue;

    if(color.classList.contains('color-1')) {
      primaryHue = 252;
    }
    else if(color.classList.contains('color-2')) {
      primaryHue = 52;
    }
    else if(color.classList.contains('color-3')) {
      primaryHue = 352;
    }
    else if(color.classList.contains('color-4')) {
      primaryHue = 152;
    }
    else if(color.classList.contains('color-5')) {
      primaryHue = 202;
    }

    color.classList.add('active')
   root.style.setProperty('--primary-color-hue', primaryHue)
  })
})

//Background Arrange
const bgOne = document.querySelector('.bg-1')
const bgTwo = document.querySelector('.bg-2')
const bgThree = document.querySelector('.bg-3')

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

bgOne.addEventListener('click', () => {

  bgOne.classList.add('active')

  bgTwo.classList.remove('active')
  bgThree.classList.remove('active')
  
  window.location.reload();
})

bgTwo.addEventListener('click', () => {
  darkColorLightness = '95%',
  whiteColorLightness = '20%',
  lightColorLightness = '15%',

  bgTwo.classList.add('active')

  bgOne.classList.remove('active')
  bgThree.classList.remove('active')
  changeBg();
})

bgThree.addEventListener('click', () => {
  darkColorLightness = '95%',
  whiteColorLightness = '10%',
  lightColorLightness = '0%',

  bgThree.classList.add('active')

  bgOne.classList.remove('active')
  bgTwo.classList.remove('active')
  changeBg();
})

// Portfolio item filter

const filterContainer = document.querySelector('.portfolio-filter-inner')
      filterBtns = filterContainer.children;
      totalFilterBtn = filterBtns.length
      portfolioItems = document.querySelectorAll('.portfolio-item')
      totalPortfolioItem = portfolioItems.length
      container = document.querySelector('.portfolio-container');
      
      for(let i=0; i<totalFilterBtn; i++) {

        filterBtns[i].addEventListener('click', function() {
          filterContainer.querySelector('.active').classList.remove('active')
          this.classList.add('active')

          const filterValue = this.getAttribute('data-filter')
          
          for(let k=0; k<totalPortfolioItem; k++) {

            if(filterValue === portfolioItems[k].getAttribute('data-category')) {
              portfolioItems[k].classList.remove('hide')
              portfolioItems[k].classList.add('show')
            }
            else {
              portfolioItems[k].classList.add('hide')
              portfolioItems[k].classList.remove('show')
            }
            if(filterValue === 'all') {
              portfolioItems[k].classList.remove('hide')
              portfolioItems[k].classList.add('show')
            }
          }
        })
      }

    

    //   const sortedItems = portfolioItems.sort((a, b) => {
    //     if (filterValue === 'all') {
    //         return 0; // No specific order when 'all' is selected
    //     }
    //     return a.getAttribute('data-category') === filterValue ? -1 : 1;
    // });

    // // Clear the container and append the sorted items
    // container.innerHTML = '';
    // sortedItems.forEach(item => container.appendChild(item));



    navLinks.forEach(navLink => {
      navLink.addEventListener('click', function(e) {
        e.preventDefault();
    
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
    
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
    
          navLinks.forEach(link => link.classList.remove('active'));
          this.classList.add('active');
        }

      });
    });


function addActiveClassToVisibleSection() {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    const link = document.querySelector(`a.nav-link[href="#${section.id}"]`);

    if (rect.top <= 58 && rect.bottom >= 58) {
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      link.classList.add('active');
    }
  });
}
window.addEventListener('wheel', addActiveClassToVisibleSection);
window.addEventListener('scroll', addActiveClassToVisibleSection);
// window.addEventListener('load', addActiveClassToVisibleSection);


const resumeButtons = document.querySelectorAll('.btn-group .resume-btn')
resumeButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    if(this.classList.contains('active')) {
      this.classList.remove('active')
    }
    else {
      resumeButtons.forEach(otherBtn => {
        otherBtn.classList.remove('active')
      })
    }
    this.classList.add('active')
  })
})

$(document).ready(function() {
  // Initial state
  $('.education-section').show();
  $('.professional-skills-section').hide();

  // Education button click
  $('.education-btn').click(function() {
      $('.education-section').show();
      $('.professional-skills-section').hide();
  });

  // Professional Skills button click
  $('.skills-btn').click(function() {
      $('.education-section').hide();
      $('.professional-skills-section').show();
  });
});


var typed = new Typed('#typed-text', {
  strings: ["<span class='welcome-text'>Welcome to my world</span>","Front-end Developer <i class='lni lni-code-alt icon'></i>", "Web Developer <i class='lni lni-code icon'></i>"],
  typeSpeed: 10,
  backSpeed: 10,
  backDelay: 2000,
  loop: true,
  waitUntilVisible: true,
  cursorChar: '|',
  onStringTyped: function(arrayPos, self) {
    if (arrayPos === 1) {
      var icon = document.querySelector('.icon');
    }
    $(".welcome-text").css({
      "font-family": "var(--body-font)",
      "font-weight": "normal",
    })
  },
});




// download button 

const animationDuration = 2900;
const resetDuration = 2000;

document.querySelectorAll('.download-btn').forEach(button => {

  let duration = 3000,
      svg = button.querySelector('svg'),
      svgPath = new Proxy({
          y: null,
          smoothing: null
      }, {
          set(target, key, value) {
              target[key] = value;
              if(target.y !== null && target.smoothing !== null) {
                  svg.innerHTML = getPath(target.y, target.smoothing, null);
              }
              return true;
          },
          get(target, key) {
              return target[key];
          }
      });

  button.style.setProperty('--duration', duration);

  svgPath.y = 20;
  svgPath.smoothing = 0;

  button.addEventListener('click', e => {
    e.preventDefault();

    if (!button.classList.contains('loading')) {
        button.classList.add('loading');

        setTimeout(() => {
          window.location.href = button.getAttribute('href');

          setTimeout(() => {
            button.classList.remove('loading');
          }, resetDuration)

      }, animationDuration);

    }
});


});

function getPoint(point, i, a, smoothing) {
  let cp = (current, previous, next, reverse) => {
          let p = previous || current,
              n = next || current,
              o = {
                  length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                  angle: Math.atan2(n[1] - p[1], n[0] - p[0])
              },
              angle = o.angle + (reverse ? Math.PI : 0),
              length = o.length * smoothing;
          return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
      },
      cps = cp(a[i - 1], a[i - 2], point, false),
      cpe = cp(point, a[i - 1], a[i + 1], true);
  return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
  let points = pointsNew ? pointsNew : [
          [4, 12],
          [12, update],
          [20, 12]
      ],
      d = points.reduce((acc, point, i, a) => i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, '');
  return `<path d="${d}" />`;
}





