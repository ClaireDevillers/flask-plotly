/* GENDER NEXUS GRAPH */
const GN_STATE = {
  20182020: true,
  20152017: false,
};

const GN_2018_2020 = [20,19,21];
const GN_2015_2017 = [29,17,27];

const GN_2018_2020_DATASET = {
  data: GN_2018_2020,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#094fa3',
  borderColor:'#094fa3',
  borderWidth: 1
};
const GN_2015_2017_DATASET = {
  data: GN_2015_2017,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#25a6dc',
  borderColor:'#25a6dc',
  borderWidth: 1
};

const GN_LABELS = [
    ['Deals with Gender','Disaggregated Data'],
  ['Women as','End Beneficiaries'],
  ['SDG 5:','Gender Equality']
];

/* COUNTRY INCOME GRAPH */
const COUNTRY_INCOME_STATE = {
  20182020: true,
  20152017: false,
};

const COUNTRY_INCOME_2018_2020 = [
    24,62,22,4,32];
const COUNTRY_INCOME_2015_2017 = [
    32,58,21,4,42];

const COUNTRY_INCOME_2018_2020_DATASET = {
  data: COUNTRY_INCOME_2018_2020,
  barPercentage: 1,
  categoryPercentage: .5,
  backgroundColor:'#094fa3',
  borderColor:'#094fa3',
  borderWidth: 1
};
const COUNTRY_INCOME_2015_2017_DATASET = {
  data: COUNTRY_INCOME_2015_2017,
  barPercentage: 1,
  categoryPercentage: .5,
  backgroundColor:'#25a6dc',
  borderColor:'#25a6dc',
  borderWidth: 1
};

const COUNTRY_INCOME_LABELS = [
    'Low Income',
    'Lower-Middle Income',
    'Upper-Middle Income',
    'High Income',
    'LDCs',
];

/** Beneficiaries */
let BENEF_STATE = {
  direct: true,
  end: false,
};
const DIRECT_2015_2017 = [46, 38, 13, 12, 7]
const DIRECT_2018_2020 = [61, 27, 15, 22, 16]
const DIRECT_LABELS = [
    ['Project Developers/', 'Corporates'],
    ['Entrepreneurs/', 'Small Enterprises'],
    ['Financial', 'Institutions'],
    ['Small and Growing', 'Businesses'],
    ['Microfinance', 'Institutions'],
]

const END_2015_2017 = [60, 39, 28, 18, 17]
const END_2018_2020 = [52, 50, 36, 21, 19]
const END_LABELS = [
  ['Low-income/', 'Base Of The Pyramid'],
    'General Population',
    ['Rural and', 'Smallholder Farmers'],
    ['Entrepreneurs/', 'Small Enterprises'],
    'Women',
]

const DIRECT_2015_2017_DATASET = {
  data: DIRECT_2015_2017,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#094fa3',
  borderColor:'#094fa3',
  borderWidth: 1
};
const DIRECT_2018_2020_DATASET = {
  data: DIRECT_2018_2020,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#25a6dc',
  borderColor:'#25a6dc',
  borderWidth: 1
};
const END_2015_2017_DATASET = {
  data: END_2015_2017,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#094fa3',
  borderColor:'#094fa3',
  borderWidth: 1
};
const END_2018_2020_DATASET = {
  data: END_2018_2020,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#25a6dc',
  borderColor:'#25a6dc',
  borderWidth: 1
};

/* Regions fundraising graph */
const REGIONS_GRAPH_DATA = [44,20,15,14,13,6]

const REGIONS_GRAPH_DATASET = {
  data: REGIONS_GRAPH_DATA,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#094fa3',
};

const REGIONS_GRAPH_LABELS = [
    'Sub-Saharan Africa',
    'Global',
    'Latin America & the Caribbean',
    'South Asia',
    'East Asia and Pacific',
    'Middle East and North Africa',
];

/* SECTORS */
const SECTORS_STATE = {
  2020: true,
  2019: false,
  2018: false,
  2015_2017: false,
};

const SECTOR_2020 =      [28,4,35,26,15,7,0,2, 9];
const SECTOR_2019 =      [25,4,28,21,17,4,4,2, 8];
const SECTOR_2018 =      [19,2,33,28, 5,5,5,2,12];
const SECTOR_2015_2017 = [16,2,37,23,18,5,1,1,11];

const SECTOR_2020_DATASET = {
  data: SECTOR_2020,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#094fa3',
  borderColor:'#094fa3',
  borderWidth: 1
};
const SECTOR_2019_DATASET = {
  data: SECTOR_2019,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#0e76bc',
  borderColor:'#0e76bc',
  borderWidth: 1
};
const SECTOR_2018_DATASET = {
  data: SECTOR_2018,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#5da6d8',
  borderColor:'#5da6d8',
  borderWidth: 1
};
const SECTOR_2015_2017_DATASET = {
  data: SECTOR_2015_2017,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#86bde0',
  borderColor:'#86bde0',
  borderWidth: 1
};

let SECTOR_CURRENT_DATASET = [SECTOR_2020_DATASET];

const SECTOR_LABELS = ['Agriculture', 'Education', 'Energy', ['Financial', 'Services'], 'General', 'Health', ['Housing and','Real Estate'] ,['Industry', 'and Trade'], 'Infrastructure'];

/*Blending Archetypes */
const BA_STATE = {
  2020: true,
  2019: false,
  2018: false,
  2015_2017: false
};

const BA_2015_2017 = [69,13,32,28];
const BA_2018 =      [64, 7,35,16];
const BA_2019 =      [62, 9,26,28];
const BA_2020 =      [85,11,19,30];

const BA_2020_DATASET = {
  data: BA_2020,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#094fa3',
};
const BA_2019_DATASET = {
  data: BA_2019,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#0e76bc',
};
const BA_2018_DATASET = {
  data: BA_2018,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#5da6d8',
};
const BA_2015_2017_DATASET = {
  data: BA_2015_2017,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#86bde0',
};

let CURRENT_BA_DATASET = [BA_2020_DATASET];

const BA_LABELS = [['Concessional', 'Capital'], ['Design-Stage', 'Grant'],['Guarantee /',' Risk Insurance'],  ['Technical', 'Assistance']];

/* DEAL SIZES AND TYPES */

const DST_BOND_NOTE = [8, 21, 11, 6];
const DST_COMPANY = [11, 16, 19, 37];
const DST_FACILITY = [8, 16, 8, 4];
const DST_FUND = [37, 19, 39, 35];
const DST_DIB = [4, 7, 6, 0];
const DST_PROJECT = [32, 22, 19, 19];
let DST_CURRENT_DATASET = DST_BOND_NOTE;

/*Blending Archetypes */
let BF_STATE = 'bft';

const BF_BFT = [   32,   24,    8,    4,   21,    6,    32,    63,    55,   24,   10,   13,   16,    2,    3,     1,   100];
const BF_CC =  [11.97, 5.88, 1.24, 0.90, 1.90, 2.06, 16.68, 21.38, 21.53, 5.98, 4.59, 3.55, 6.93, 0.13, 0.23, 0.03, 31.25];

/*Blended Finance */
const BF_BFT_DATASET = {
  data: BF_BFT,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:[
    '#dd4740',
    '#d0a13b',
    '#4d9449',
    '#b73e3e',
    '#e1593e',
    '#38acd7',
    '#f7b735',
    '#852e3d',
    '#e7793a',
    '#d14988',
    '#f1a23d',
    '#ca9038',
    '#53733f',
    '#257fbc',
    '#5ea84a',
    '#16598b',
    '#163a67',
  ],
};
const BF_CC_DATASET = {
  data: BF_CC,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:[
    '#dd4740',
    '#d0a13b',
    '#4d9449',
    '#b73e3e',
    '#e1593e',
    '#38acd7',
    '#f7b735',
    '#852e3d',
    '#e7793a',
    '#d14988',
    '#f1a23d',
    '#ca9038',
    '#53733f',
    '#257fbc',
    '#5ea84a',
    '#16598b',
    '#163a67',
  ],
};

const BF_LABELS = ['1. No Poverty', '2. Zero Hunger', '3. Good Health & Well-Being',
  '4. Quality Education', '5. Gender Equality', '6. Clean Water & Sanitation', '7. Affordable & Clean Energy',
  '8. Decent Work & Economic Growth', '9. Industry, Innovation & Infrastructure', '10. Reduced Inequalities',
  '11. Sustainable Cities', '12. Responsible Consumption','13. Climate Action', '14. Life Below Water',
  '15. Life on Land', '16. Peace, Justice & Strong Institutions', '17. Partnerships for Goals'];

/*Blending Archetypes */
const ID_STATE = {
  all: true,
  recent: false,
};

const ID_ALL = [39,35,17,7,1,0];
const ID_RECENT = [46,30,15,7,1,1];

const ID_ALL_DATASET = {
  data: ID_ALL,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#094fa3',
};
const ID_RECENT_DATASET = {
  data: ID_RECENT,
  barPercentage: 1,
  categoryPercentage: .8,
  backgroundColor:'#25a6dc',
};

let CURRENT_ID_DATASET = [ID_ALL_DATASET];

const ID_LABELS = ['Debt','Equity','Grant','Guarantee','Mezzanine','Insurance'];

/* INVESTOR TRENDS - TOTAL COMMITMENTS */
const TC_2018_2020 = [10,15,29,12,35];
const TC_2015_2017 = [9,11,24,17,39];
const TC_2012_2014 = [9,12,27,13,38];

const TC_LABELS = ['Foundation / NGO','Impact Investor','Commercial Investor','Development Agency','MDB / DFI'];

/* INVESTOR TRENDS - CONCESSIONAL COMMITMENTS */
const CC_2018_2020 = [17,5,3,37,38];
const CC_2015_2017 = [15,6,3,38,37];
const CC_2012_2014 = [19,3,1,36,41];

const CC_LABELS = ['Foundation / NGO','Impact Investor','Commercial Investor','Development Agency','MDB / DFI'];


/* Commercial investors */
const CI_2018_2020 = [3,13,14,16,15,40];
const CI_2015_2017 = [1,9,18,6,24,42];
const CI_2012_2014 = [2,12,15,5,18,48];

const CI_LABELS = [
    'Other',
    'Institutional Investors',
    'Asset Managers',
    'Private Equity/\nVenture Capital Firm',
    'Corporates',
    'Financial Institutions'
];

/* SOURCES OF FINANCIAL COMMITMENTS */

const SFC_ALL = [12, 14,25,17,32];
const SFC_RECENT = [10,8,27,20,35];

let CURRENT_SFC_DATA = SFC_ALL;
const SFC_LABELS = ['Foundation / NGO','Impact Investor','Commercial Investor','Development Agency','MDB / DFI'];

/* OVERALL MARKET */

const OM_STATE = {
  adc: true,
  fd: false,
  af: false,
};

const OM_ADC = [36,33,44,45,54,55,53,63,58,53,54,18];
const OM_FD = [0,0,0,0,0,0,0,0,0,0,0,71];
const OM_AF = [{x: '2010', y: 5.98},
  {x: '2011', y: 5.43},{x: '2012', y: 9.33},
  {x: '2013', y: 8.59},{x: '2014', y: 12.66},
  {x: '2015', y: 10.91},{x: '2016', y: 8.13},
  {x: '2017', y: 12.58},{x: '2018', y: 10.67},
  {x: '2019', y: 11.00},{x: '2020', y: 4.48},
  {x: '2021', y: 9.84}];
//const OM_OUTLIERS = [{x: '2014', y: 19.47},{x: '2015', y: 16.70},{x: '2016', y: 16.91}];

const OM_ADC_DATASET = {
  type: 'bar',
  label: 'Total Transaction Count (Closed)',
  yAxisID: 'transaction-count',
  data: OM_ADC,
  backgroundColor: '#239ccf',
  order: 2,
};
const OM_FD_DATASET = {
  type: 'bar',
  label: 'Transactions Currently Fundraising',
  yAxisID: 'transaction-count',
  data: OM_FD,
  backgroundColor: '#d3ebf5',
  order: 3,
};
const OM_AF_DATASET = {
  type: 'line',
  label: 'Aggregate Financing',
  data: OM_AF,
  borderColor: '#094fa3',
  backgroundColor: 'transparent',
  pointBackgroundColor: 'transparent',
  pointBorderColor: 'transparent',
  order: 1,
};

// const OM_OUTLIER_DATASET =  {
//   type: 'scatter',
//   label: 'Outliers',
//   data: OM_OUTLIERS,
//   yAxisID: 'dollar-amount',
//   backgroundColor: '#7d7e7e',
//   borderColor: '#7d7e7e',
//   borderWidth: 5
// };

let CURRENT_OM_DATASET = [OM_ADC_DATASET];

const OM_LABELS = ['2010', '2011', '2012', '2013', '2014', '2015', '2016','2017','2018','2019','2020','2021'];

/* Regions Map */

// latam, subsahara, me, eu, sasia, eapac
//    missing global 6 11 7 11
const RM_2020 = [17,61,8,4,19,17, 6]; //2020
const RM_2019 = [11,45,13,4,21,17, 11]; //2019
const RM_2018 = [14,38,3,2,19,22, 7]; //2018
const RM_2015_2017 = [15,48,8,4,16,16, 11]; //2015-2017

