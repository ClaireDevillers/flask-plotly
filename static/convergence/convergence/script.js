// slow hero video
let vidEl = document.getElementById("hero-vid")
vidEl.playbackRate = 0.5


// Hero mouse button to next section
$(".hero-mouse").on( 'click', function() {
  document.querySelector(".ceo-letter-container").scrollIntoView( {behavior: "smooth" })
});

$(document).ready(function () {
  checkNavScroll();
  checkBodyScroll();
})

//OPEN POPUPS
$('.open-modal').on('click',function () {
  var id = $(this).attr('data-id');
  $('#' + id).addClass('show');
  $('body').addClass('no-scroll');
});
$('.open-centered-modal').on('click',function () {
  var id = $(this).attr('data-id');
  $('#' + id).addClass('show');
});

//CLOSE POPUPS
$('.close-modal').on('click',function () {
  var id = $(this).attr('data-id');
  $('#' + id).removeClass('show');
  $('body').removeClass('no-scroll');
});

//TOGGLE MODAL POPUPS (FROM SIDE)
$('.toggle-right-modal').on('click',function () {
  var id = $(this).attr('data-id');
  if ( $('#' + id).hasClass('show')) {
    $('#' + id).removeClass('show');
  } else {
    $('#' + id).addClass('show');
  }
});

// On Scroll Handler
$(window).scroll(function() {
  var width = document.innerWidth;
  checkNavScroll();
  checkBodyScroll();
});

// Check animations for site
function checkBodyScroll() {

  //Fade in animation
  var height = $(window).height();
  $('.scroll-top').each(function() {

    if ( $(window).scrollTop() + height/1.5 >  $(this).offset().top ) {
      $(this).addClass('show');
    } else {
      $(this).removeClass('show');
    }
  });

  $('.scroll-top-v2').each(function() {
    if ( $(window).scrollTop() + height/1.1 >  $(this).offset().top ) {
      $(this).addClass('show');
    } else {
      $(this).removeClass('show');
    }
  });

  $('.yellow-border-animate').each(function() {
    let counter = $(this);
    if ($(window).scrollTop() + height/1.5 >  counter.offset().top ) {
      if (!counter.hasClass('animation-loaded')) {
        counter.addClass('animation-loaded');
      }
    } else {
      counter.removeClass('animation-loaded');
    }
  });

  $('.divider-text').each(function() {
    let counter = $(this);
    if ($(window).scrollTop() + height/1.5 >  counter.offset().top ) {
      if (!counter.hasClass('animation-loaded')) {
        counter.addClass('animation-loaded');
      }
    } else {
      counter.removeClass('animation-loaded');
    }
  });

  $('.regions country-box').each(function() {
    let counter = $(this);
    if ($(window).scrollTop() + height/1.5 >  counter.offset().top ) {
      if (!counter.hasClass('animation-loaded')) {
        counter.addClass('animation-loaded');
      }
    } else {
      counter.removeClass('animation-loaded');
    }
  });


  $('.stat-divider').each(function() {
    let counter = $(this);
    if ($(window).scrollTop() + height/1.5 >  counter.offset().top ) {
      if (!counter.hasClass('animation-loaded')) {
        counter.addClass('animation-loaded');
      }
    } else {
      counter.removeClass('animation-loaded');
    }
  });

  $('.counter').each(function() {
      let counter = $(this);
      let defaultData = $(this).data('value');
    $(this).text(defaultData);
    if ($(window).scrollTop() + height/1.5 >  counter.offset().top ) {
      if (!counter.hasClass('counter-loaded')) {
        counter.addClass('counter-loaded');
        $({ Counter: 0 }).animate({
          Counter: removeComma(counter.text())
        }, {
          duration: 1000,
          easing: 'swing',
          step: function() {
            counter.text(numberWithCommas(Math.ceil(this.Counter)));
          },
          done: function() {
            counter.text(numberWithCommas(Math.ceil(this.Counter)));
          }
        });
      }
    } else {
      counter.removeClass('counter-loaded');
    }
  });

  // Reflections section animations
  // let topValue = $(window).scrollTop() - $('#reflections-wrapper').offset().top;
  // if (topValue > 0 && topValue < height * 3.5) {
  //   $('#reflections').css('top', topValue + 'px');
  // } else {
  //   $('#reflections').css('top', 0);
  // }
  //
  // if (topValue > height * 1.6) {
  //   $('.reflections-content').removeClass('rc_1');
  //   $('.reflections-content').removeClass('rc_2');
  //   $('.reflections-content').addClass('rc_3');
  // } else if (topValue > height * .6) {
  //   $('.reflections-content').removeClass('rc_1');
  //   $('.reflections-content').removeClass('rc_3');
  //   $('.reflections-content').addClass('rc_2');
  // } else {
  //   $('.reflections-content').removeClass('rc_2');
  //   $('.reflections-content').removeClass('rc_3');
  //   $('.reflections-content').addClass('rc_1');
  // }

  // Graph Animiations

  let DSGraph = '.dealssizesgraph-container';

  if ($(window).scrollTop() + height/1.5 >  $(DSGraph).offset().top ) {
    if (!$(DSGraph).hasClass('graph-loaded')) {
      $(DSGraph).addClass('graph-loaded');
      animateDSGraph();
    }
  } else {
    $(DSGraph).removeClass('graph-loaded');
  }

  let GNGraph = '._GN';

  if ($(window).scrollTop() + height/1.5 >  $(GNGraph).offset().top ) {
    if (!$(GNGraph).hasClass('graph-loaded')) {
      $(GNGraph).addClass('graph-loaded');
      animateGNGraph();
    }
  } else {
    $(GNGraph).removeClass('graph-loaded');
  }

  let SECGraph = '._sectors';

  if ($(window).scrollTop() + height/1.5 >  $(SECGraph).offset().top ) {
    if (!$(SECGraph).hasClass('graph-loaded')) {
      $(SECGraph).addClass('graph-loaded');
      animateSectorsGraph();
    }
  } else {
    $(SECGraph).removeClass('graph-loaded');
  }

  let CtryIncomeGraph = '._country_income'
  if ($(window).scrollTop() + height/1.5 >  $(CtryIncomeGraph).offset().top ) {
    if (!$(CtryIncomeGraph).hasClass('graph-loaded')) {
      $(CtryIncomeGraph).addClass('graph-loaded');
      updateCountryIncomeGraph();
    }
  } else {
    $(CtryIncomeGraph).removeClass('graph-loaded');
  }

  let BAGraph = '._BA';

  if ($(window).scrollTop() + height/1.5 >  $(BAGraph).offset().top ) {
    if (!$(BAGraph).hasClass('graph-loaded')) {
      $(BAGraph).addClass('graph-loaded');
      animateBAGraph();
    }
  } else {
    $(BAGraph).removeClass('graph-loaded');
  }

  let RegionsBarGraphScrollTop = '._regionsbargraph';
  if ($(window).scrollTop() + height/1.5 >  $(RegionsBarGraphScrollTop).offset().top ) {
    if (!$(RegionsBarGraphScrollTop).hasClass('graph-loaded')) {
      $(RegionsBarGraphScrollTop).addClass('graph-loaded');
      animateRegionsBarGraph();
    }
  } else {
    $(RegionsBarGraphScrollTop).removeClass('graph-loaded');
  }

  let Benef = '._benef';
  if ($(window).scrollTop() + height/1.5 >  $(Benef).offset().top ) {
    if (!$(Benef).hasClass('graph-loaded')) {
      $(Benef).addClass('graph-loaded');
      updateBenefGraph();
    }
  } else {
    $(Benef).removeClass('graph-loaded');
  }



  let BFGraph = '._BF';

  if ($(window).scrollTop() + height/1.5 >  $(BFGraph).offset().top ) {
    if (!$(BFGraph).hasClass('graph-loaded')) {
      $(BFGraph).addClass('graph-loaded');
      updateBFChart();
    }
  } else {
    $(BFGraph).removeClass('graph-loaded');
  }

  // let IDGraph = '._ID';
  //
  // if ($(window).scrollTop() + height/1.5 >  $(IDGraph).offset().top ) {
  //   if (!$(IDGraph).hasClass('graph-loaded')) {
  //     $(IDGraph).addClass('graph-loaded');
  //     animateIDGraph();
  //   }
  // } else {
  //   $(IDGraph).removeClass('graph-loaded');
  // }

  // let SFCGraph = '._SFC';
  //
  // if ($(window).scrollTop() + height/1.5 >  $(SFCGraph).offset().top ) {
  //   if (!$(SFCGraph).hasClass('graph-loaded')) {
  //     $(SFCGraph).addClass('graph-loaded');
  //     animateSFCGraph();
  //   }
  // } else {
  //   $(SFCGraph).removeClass('graph-loaded');
  // }

  let TotalCommitmentsGraphContainer = '._TotalCommitments';

  if ($(window).scrollTop() + height/1.5 >  $(TotalCommitmentsGraphContainer).offset().top ) {
    if (!$(TotalCommitmentsGraphContainer).hasClass('graph-loaded')) {
      $(TotalCommitmentsGraphContainer).addClass('graph-loaded');
      animateTCGraph();
    }
  } else {
    $(TotalCommitmentsGraphContainer).removeClass('graph-loaded');
  }

  let ConcessionalCommitmentsGraphContainer = '._ConcessionalCommitments';

  if ($(window).scrollTop() + height/1.5 >  $(ConcessionalCommitmentsGraphContainer).offset().top ) {
    if (!$(ConcessionalCommitmentsGraphContainer).hasClass('graph-loaded')) {
      $(ConcessionalCommitmentsGraphContainer).addClass('graph-loaded');
      animateCCGraph();
    }
  } else {
    $(ConcessionalCommitmentsGraphContainer).removeClass('graph-loaded');
  }

  let CommercialInvestorsGraphContainer = '._CommercialInvestors';

  if ($(window).scrollTop() + height/1.5 >  $(CommercialInvestorsGraphContainer).offset().top ) {
    if (!$(CommercialInvestorsGraphContainer).hasClass('graph-loaded')) {
      $(CommercialInvestorsGraphContainer).addClass('graph-loaded');
      animateCIGraph();
    }
  } else {
    $(CommercialInvestorsGraphContainer).removeClass('graph-loaded');
  }

  let OMGraph = '._OM';

  if ($(window).scrollTop() + height/1.5 >  $(OMGraph).offset().top ) {
    if (!$(OMGraph).hasClass('graph-loaded')) {
      $(OMGraph).addClass('graph-loaded');
      animateOMGraph();
    }
  } else {
    $(OMGraph).removeClass('graph-loaded');
  }

  let RegionsGraph = '.regions-map';

  if ($(window).scrollTop() + height/1.5 >  $(RegionsGraph).offset().top ) {
    if (!$(RegionsGraph).hasClass('graph-loaded')) {
      $(RegionsGraph).addClass('graph-loaded');
    }
  } else {
    $(RegionsGraph).removeClass('graph-loaded');
  }
}

// Check which style Nav to show
function checkNavScroll() {
  //Fade animation
  $('.main-nav').each(function() {
    var height = $(window).height();
    if ( $(window).scrollTop() >  $('.hero-container').offset().top + (height - 74) ) {
      if(!$(this).hasClass('sticky-nav')) {
        $(this).addClass('sticky-nav');
      }
    } else {
      if($(this).hasClass('sticky-nav')) {
        $(this).removeClass('sticky-nav');
      }
    }
  });
}

// On Click Triggers
$('.menu-trigger').on('click', function (e) {
  if (!$('.main-nav').hasClass('open')) {
    $('.menu-trigger span').text('Close');
    $('.main-nav').addClass('open');
    $('body').addClass('no-scroll');
  } else {
    $('.main-nav').removeClass('open');
    $('body').removeClass('no-scroll');
    $('.menu-trigger span').text('Menu');
  }
});

$('.menu-trigger-close').on('click', function (e) {
  if ($('.main-nav').hasClass('open')) {
    $('.main-nav').removeClass('open');
    $('body').removeClass('no-scroll');
  }
});

$('.nav-item').on('click', function (e) {
  $('body').css('opacity', '0');
  setTimeout(function () {
    $('.main-nav').removeClass('open');
    $('body').removeClass('no-scroll');
    $('body').css('opacity', '1');
    $('.menu-trigger span').text('Menu');
  },400)
});

$('.back-to-top').on('click', function (e) {
  $('body').css('opacity', '0');
  setTimeout(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    $('body').css('opacity', '1');
  },400)
});

$('.circle-flip-item').on('click', function (e) {
  var screenWidth = $(window).width();
  if (screenWidth < 992) {
    if ($(this).hasClass('flipped')) {
      $(this).removeClass('flipped');
    } else {
      $(this).addClass('flipped');
    }
  }
});

$('.quiz-answer-container > div').on('click', function () {
  let item = $(this);
  $('.quiz-answer-container > div').removeClass('incorrect');
  $('.quiz-answer-container > div').removeClass('correct');
  let value = item.text();
  if (value === '1,200') {
    item.addClass('correct');
    $('.answer-text').text('Correct!')
  } else {
    item.addClass('incorrect');
    $('.answer-text').html('Not quite! <b>1,200</b> organizations have participated in blended finance to date.')
  }
});

// Number Format funcs
function removeComma(text) {
  return text.replace(',','')
}

function numberWithCommas(text) {
  return text.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


