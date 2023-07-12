//DEFAULT URL
const CURRENT_LINK = window.location.href;

// REPLACE WITH CUSTOM LINK IF NOT USING DEFAULT
const URL = CURRENT_LINK;

const LINKED_IN_TEXT =
  ['Convergence\'s new State of Blended Finance 2021 report provides an updated analysis of the blended finance ' +
  'market, including blending approaches, sectors, regions, and investor trends. For the first time, the report ' +
  'will also include a thematic focus on how to achieve scale in the blended finance market, highlighting key ' +
  'challenges and recommendations. Read the report now:', // metrics

    'Convergence\'s new State of Blended Finance 2021 report found that funds continue to be the most common ' +
    'blended structure, comprising 35% of all transactions in 2020.\n' + '\n' +
    'Read the report for more insights on the blended finance market, including blending approaches, sectors, ' +
    'regions, and investor trends.\n' + '\n' + 'Read it now:', // funds

    'Convergence\'s new State of Blended Finance 2021 report found that almost two-thirds of blended finance ' +
    'transactions in 2020 targeted SSA, a significant increase compared to previous years.\n' + '\n' +
    'Read the report to find out how other regions and countries measure up when it comes to blended finance ' +
    'activity:', // ssa

    'Convergence\'s new State of Blended Finance 2021 report found that the agriculture sector has witnessed ' +
    'increased momentum. Agriculture focused blended finance transactions comprised 28% of 2020 deals, compared ' +
    'to 16% between 2015-17.\n' + '\n' +
    'Read the report to find out which sectors were the focus of blended finance transactions in the last year:', //ag

    'Convergence\'s new State of Blended Finance 2021 report found that 20% of deals since 2018 collected gender ' +
    'disaggregated data.\n' + '\n' +
    'Read the report for more insights on the blended finance – gender nexus:', // gender
  ];

const TWITTER_TEXT = [
    '@ConvergenceBF\'s new State of Blended Finance 2021 report provides an updated analysis of the blended ' +
    'finance market, including sector, region, & investor trends. This year\'s report also focuses on achieving ' +
    'scale in #blendedfinance.\n\n' +
    'Read it now:https://www.convergence.finance/blended-finance/2021', // metrics

    '@ConvergenceBF\'s new State of Blended Finance 2021 report found that funds continue to be the most common ' +
    'blended structure, comprising 35% of all transactions in 2020.\n' + '\n' +
    'Read the report for more insights on the #blendedfinance market #SoBF2021: ' +
    'https://www.convergence.finance/blended-finance/2021', // funds

    '@ConvergenceBF\'s new State of Blended Finance 2021 report found that 61% of #blendedfinance transactions in ' +
    '2020 targeted Sub-Saharan Africa.\n' + '\n' +
    'Read the report to find out how other regions/countries measure up when it comes to blended ' +
    'finance #SoBF2021: https://www.convergence.finance/blended-finance/2021', // ssa

    '@ConvergenceBF\'s new State of Blended Finance 2021 report found that the ag sector witnessed increased ' +
    'momentum. Ag. focused #blendedfinance deals comprised 28% of 2020 deals, compared to 16% in 2015-17.\n' + '\n' +
    'Find out how other sectors performed #SoBF2021: https://www.convergence.finance/blended-finance/2021', // ag

    '@ConvergenceBF\'s new State of Blended Finance 2021 report found that 20% of deals since 2018 collected gender ' +
    'disaggregated data.\n\n' +
    'Read the report for more insights on the #blendedfinance – gender ' +
    'nexus #SoBF2021: https://www.convergence.finance/blended-finance/2021',
];

const TWITTER_HASH = ['#blendedfinance #SoBF2021 #SDGs #sustainablefinance',
                      '#blendedfinance #SoBF2021 #SDGs #sustainablefinance',
                      '#blendedfinance #SoBF2021 #SDGs #sustainablefinance',
                      '#blendedfinance #SoBF2021 #SDGs #sustainablefinance',
                      '#blendedfinance #SoBF2021 #SDGs #sustainablefinance'];


$('.share-link').on('click', function (e) {
  e.preventDefault();
  var type = $(this).data('type');
  var location = $(this).data('location');
  var url = '';
  switch(type) {
    case 'li':
      url = 'https://www.linkedin.com/shareArticle?mini=true&url='+ encodeURIComponent(URL) +'&title=&summary=' + encodeURIComponent(LINKED_IN_TEXT[location]);
      break;
    case 'tw':
      url = 'https://twitter.com/intent/tweet?url='+ encodeURIComponent(URL) +'&text='+  encodeURIComponent(TWITTER_TEXT[location]) +'&hashtags=' + TWITTER_HASH[location];
      break;
  }

  var intWidth = '500';
  var intHeight = '400';
  var strResize = 'yes';

  // Set title and open popup with focus on it
  var strTitle ='Social Share';
  let strParam = 'width=500,height=400,resizable=yes';
  window.open(url, strTitle, strParam).focus();
});


