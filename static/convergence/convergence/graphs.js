Chart.plugins.register(ChartDataLabels);

var screenWidth = $(window).width();

/* DEALS AND SIZES GRAPH*/
var dealssizesgraph;
function animateDSGraph() {
  dealssizesgraph = new Chart(document.getElementById('dealssizesgraph'), {
    type: 'bar',
    data: {
      labels: ['2015-2017', '2018', '2019', '2020'],
      datasets: [{
        data: DST_CURRENT_DATASET,
        barPercentage: 0.9,
        categoryPercentage: 1,
        backgroundColor: [
          '#6b95c8',
          '#094fa3',
          '#094fa3',
          '#094fa3',
        ],
        borderColor: [
          '#6b95c8',
          '#094fa3',
          '#094fa3',
          '#094fa3',
        ],
      }]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          },
          ticks: {
            fontSize: 13,
          }
        }],
        yAxes: [{
          display:false,
          gridLines: {
            display:false
          },
          ticks: {
            beginAtZero: true,
            fontSize: 20,
            suggestedMin: 0,
            suggestedMax: 45
          }
        }]
      },
      plugins: {
        labels: {
          render: function (data) {
            return '';
          },
        },
        datalabels: {
            color: function(data) {
              if (data.dataset.data[data.dataIndex] > 8) {
                return '#fff';
              }
              return '#313131';
            },
            anchor: 'end',
            align: function(data) {
              if (data.dataset.data[data.dataIndex] > 8) {
                return 'bottom'
              }
              return 'top'
            },
            formatter: function(value, context) {
              if (value !== 0) {
                return Math.round(value) + '%';
              } else {
                return '';
              }

            },
            font: {
              weight: 'bold',
              size: 20,
            }
          }
      }
    }
  });

  var tooltipConfig = {
    intersect: false,
    callbacks: {
      title: function(a) {
        let label = a[0].label;
        label = label.toString().replace('/,', '/');
        label = label.toString().replace(',', ' ');
        return label;
      },
    }
  };
  dealssizesgraph.options.tooltips = tooltipConfig;
  dealssizesgraph.update();
}

/* GENDER NEXUS GRAPH*/
var genderNexusgraph;
function animateGNGraph() {
  genderNexusgraph = new Chart(document.getElementById('gngraph'), {
    type: 'bar',
    data: {
      labels: GN_LABELS,
      datasets: [GN_2018_2020_DATASET],
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          },
          ticks: {
            fontSize: 13,
          }
        }],
        yAxes: [{
          display:false,
          gridLines: {
            display:false
          },
          ticks: {
            beginAtZero: true,
            fontSize: 20,
            suggestedMin: 0,
            suggestedMax: 30
          }
        }]
      },
      plugins: {
        labels: {
          render: function (data) {
            return '';
          },
        },
        datalabels: {
            color: function(data) {
              if (data.dataset.data[data.dataIndex] > 8) {
                return '#fff';
              }
              return '#313131';
            },
            anchor: 'end',
            align: function(data) {
              if (data.dataset.data[data.dataIndex] > 8) {
                return 'bottom'
              }
              return 'top'
            },
            formatter: function(value, context) {
              if (value !== 0) {
                return Math.round(value) + '%';
              } else {
                return '';
              }

            },
            font: {
              weight: 'bold',
              size: 20,
            }
          }
      }
    }
  })

  var tooltipConfig = {
    intersect: false,
    callbacks: {
      title: function(a) {
        let label = a[0].label;
        label = label.toString().replace('/,', '/');
        label = label.toString().replace(',', ' ');
        return label;
      },
    }
  };
  genderNexusgraph.options.tooltips = tooltipConfig;
  genderNexusgraph.update();
}

/* SECTORS GRAPH */
var sectorsgraph;
function animateSectorsGraph() {

  let fontSize = 14;
  if(screenWidth < 767) {
    fontSize = 10;
  }
  sectorsgraph = new Chart(document.getElementById('sectorsgraph'), {
          type: 'bar',
          data: {
            labels: SECTOR_LABELS,
            datasets: SECTOR_CURRENT_DATASET
          },
          options: {
            legend: {
              display: false,
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display:false
                },
                ticks: {
                  fontSize: fontSize,
                  maxRotation: 0,
                  minRotation: 0
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display:false
                },
                ticks: {
                  beginAtZero: true,
                  fontSize: fontSize,
                  suggestedMin: 0,
                  suggestedMax: 55
                }
              }]
            },
            plugins: {
              labels: {
                render: function () {
                  return '';
                },
              },
              datalabels: {
                color: function(data) {
                  if (data.dataset.data[data.dataIndex] > 5) {
                    return '#313131';
                  }
                  return '#313131';
                },
                anchor: 'end',
                align: function(data) {
                  if (data.dataset.data[data.dataIndex] > 5) {
                    return 'top'
                  }
                  return 'top'
                },
                formatter: function(value, context) {
                  if (value !== 0) {
                    return Math.round(value) + '%';
                  } else {
                    return '0%';
                  }

                },
                font: {
                  weight: 'bold',
                  size: fontSize,
                }
              }
            }
          }
        });

  var tooltipConfig = {
    intersect: false,
    callbacks: {
      title: function(a) {
        let label = a[0].label;
        label = label.toString().replace('/,', '/');
        label = label.toString().replace(',', ' ');
        return label;
      },
    }
  };
  sectorsgraph.options.tooltips = tooltipConfig;
  sectorsgraph.update();
}

/* country income graph */
var countryIncomeGraph;
function updateCountryIncomeGraph() {

  let fontSize = 14;
  if(screenWidth < 767) {
    fontSize = 10;
  }
  countryIncomeGraph = new Chart(document.getElementById('country-income-graph'), {
          type: 'bar',
          data: {
            labels: COUNTRY_INCOME_LABELS,
            datasets: [COUNTRY_INCOME_2018_2020_DATASET]
          },
          options: {
            legend: {
              display: false,
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display:false
                },
                ticks: {
                  fontSize: fontSize,
                  maxRotation: 0,
                  minRotation: 0
                }
              }],
              yAxes: [{
                display: false,
                gridLines: {
                  display:false
                },
                ticks: {
                  beginAtZero: true,
                  fontSize: fontSize,
                  suggestedMin: 0,
                  suggestedMax: 65
                }
              }]
            },
            plugins: {
              labels: {
                render: function () {
                  return '';
                },
              },
              datalabels: {
                color: function(data) {
                  if (data.dataset.data[data.dataIndex] > 8) {
                    return '#fff';
                  }
                  return '#313131';
                },
                anchor: 'end',
                align: function(data) {
                  if (data.dataset.data[data.dataIndex] > 8) {
                    return 'bottom'
                  }
                  return 'top'
                },
                formatter: function(value, context) {
                  if (value !== 0) {
                    return Math.round(value) + '%';
                  } else {
                    return '';
                  }

                },
                font: {
                  weight: 'bold',
                  size: fontSize,
                }
              }
            }
          }
        });
}

/* BLENDING ARCHETYPES GRAPH */
var bagraph;
function animateBAGraph() {

  let fontSize = 16;
  if(screenWidth < 767) {
    fontSize = 8;
  }

  let labelFontSize = 16;
  if(screenWidth < 767) {
    labelFontSize = 12;
  }

  bagraph = new Chart(document.getElementById('bagraph'), {
    type: 'bar',
    data: {
      labels: BA_LABELS,
      datasets: CURRENT_BA_DATASET
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          },
          ticks: {
            fontSize: fontSize,
          }
        }],
        yAxes: [{
          display:false,
          gridLines: {
            display:false
          },
          ticks: {
            beginAtZero: true,
            fontSize: fontSize,
            suggestedMin: 0,
            suggestedMax: 70
          }
        }]
      },
      plugins: {
        labels: {
          render: function () {
            return '';
          },
        },
        datalabels: {
          color: function(data) {
            if (data.dataset.data[data.dataIndex] > 15) {
              return '#fff';
            }
            return '#313131';
          },
          anchor: 'end',
          align: function(data) {
            if (data.dataset.data[data.dataIndex] > 15) {
              return 'bottom'
            }
            return 'top'
          },
          formatter: function(value, context) {
            return Math.round(value) + '%';
          },
          font: {
            weight: 'bold',
            size: labelFontSize,
          }
        }
      }
    }
  });

  var tooltipConfig = {
    intersect: false,
    callbacks: {
      title: function(a) {
        let label = a[0].label;
        label = label.toString().replace('/,', '/');
        label = label.toString().replace(',', ' ');
        return label;
      },
    }
  };
  bagraph.options.tooltips = tooltipConfig;
  bagraph.update();
}

/* Regions bar graph */
var regionsBarGraph;
function animateRegionsBarGraph() {
  let fontSize = 14;
  if(screenWidth < 767) {
    fontSize = 8;
  }
  regionsBarGraph = new Chart(document.getElementById('regionsbargraph-b'), {
    type: 'horizontalBar',
    data: {
      labels: REGIONS_GRAPH_LABELS,
      datasets: [REGIONS_GRAPH_DATASET]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          display: false,
          gridLines: {
            display:false
          },
          ticks: {
            fontSize: fontSize,
          }
        }],
        yAxes: [{
          gridLines: {
            display:false
          },
          ticks: {
            beginAtZero: true,
            fontSize: fontSize,
          }
        }]
      },
      plugins: {
        datalabels: {
          color: function(data) {
            if (data.dataset.data[data.dataIndex] > 10) {
              return '#fff'
            }
            return '#313131'
          },
          anchor: 'end',
          align: function(data) {
            if (data.dataset.data[data.dataIndex] > 10) {
              return 'left'
            }
            return 'right'
          },
          formatter: function(value, context) {
            return Math.round(value) + '%';
          },
          font: {
            weight: '900',
            size: fontSize,
          }
        }
      }
    }
  });
}


/* BLENDED FINANCE GRAPH */
var bfGraph = document.getElementById('bfgraph');
var bfgraph;
function updateBFChart() {

  let fontSize = 16;
  if(screenWidth < 767) {
    fontSize = 8;
  }

  if (BF_STATE === 'bft') {
    bfgraph = new Chart(bfGraph, {
      type: 'horizontalBar',
      data: {
        labels: BF_LABELS,
        datasets: [BF_BFT_DATASET],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: {
              display:false
            },
            ticks: {
              fontSize: fontSize,
            }
          }],
          yAxes: [{
            gridLines: {
              display:false
            },
            ticks: {
              beginAtZero: true,
              fontSize: fontSize,
            }
          }]
        },
        plugins: {
          datalabels: {
            color: function(data) {
              if (data.dataset.data[data.dataIndex] > 4) {
                return '#fff'
              }
              return '#313131'
            },
            anchor: 'end',
            align: function(data) {
              if (data.dataset.data[data.dataIndex] > 4) {
                return 'left'
              }
              return 'right'
            },
            formatter: function(value, context) {
              return Math.round(value) + '%';
            },
            font: {
              weight: 'bold',
              size: 12,
            }
          }
        }
      }
    });
  } else {
    bfgraph = new Chart(bfGraph, {
      type: 'horizontalBar',
      data: {
        labels: BF_LABELS,
        datasets: [BF_CC_DATASET]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: false,
            gridLines: {
              display:false
            },
            ticks: {
              fontSize: 16,
            }
          }],
          yAxes: [{
            gridLines: {
              display:false
            },
            ticks: {
              beginAtZero: true,
              fontSize: 16,
            }
          }]
        },
        plugins: {
          datalabels: {
            color: function(data) {
              if (data.dataset.data[data.dataIndex] > 20) {
                return '#fff'
              }
              return '#313131'
            },
            anchor: 'end',
            align: function(data) {
              if (data.dataset.data[data.dataIndex] > 20) {
                return 'left'
              }
              return 'right'
            },
            formatter: function(value) {
              return '$' + value;
            },
            font: {
              weight: 'bold',
              size: 12,
            }
          }
        }
      }
    });
  }
}


// /* Benef Graph */
var beneficiariesGraph = document.getElementById('benef-graph');
function updateBenefGraph() {

  let fontSize = 14;
  if(screenWidth < 767) {
    fontSize = 10;
  }
  beneficiariesGraph = new Chart(document.getElementById('benef-graph'), {
    type: 'bar',
    data: {
      labels: DIRECT_LABELS,
      datasets: [DIRECT_2015_2017_DATASET,DIRECT_2018_2020_DATASET]
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          },
          ticks: {
            fontSize: fontSize,
            maxRotation: 0,
            minRotation: 0
          }
        }],
        yAxes: [{
          display: false,
          gridLines: {
            display:false
          },
          ticks: {
            beginAtZero: true,
            fontSize: fontSize,
            suggestedMin: 0,
            suggestedMax: 62
          }
        }]
      },
      plugins: {
        labels: {
          render: function (context) {
            return '';
          },
        },
        datalabels: {
          color: function(data) {
            return '#fff';
          },
          anchor: 'end',
          align: function(data) {
            return 'bottom'
          },
          formatter: function(value, context) {
            if (value !== 0) {
              return Math.round(value) + '%';
            } else {
              return '';
            }

          },
          font: {
            weight: 'bold',
            size: fontSize,
          }
        },
      }
    }
  });

  var tooltipConfig = {
    intersect: false,
    callbacks: {
      title: function(a) {
        let label = a[0].label;
        label = label.toString().replace('/,', '/');
        label = label.toString().replace(',', ' ');
        return label;
      },
    }
  };
  beneficiariesGraph.options.tooltips = tooltipConfig;
  beneficiariesGraph.update();
}

/* INSTRUMENTS DEPLOYED GRAPH */
var idgraph;
function animateIDGraph() {
  let fontSize = 16;
  if(screenWidth < 767) {
    fontSize = 10;
  }

  idgraph = new Chart(document.getElementById('idgraph'), {
    type: 'bar',
    data: {
      labels: ID_LABELS,
      datasets: CURRENT_ID_DATASET
    },
    options: {
      legend: {
        display: false,
      },
      scales: {
        xAxes: [{

          gridLines: {
            display:false
          },
          ticks: {
            fontSize: fontSize,
          }
        }],
        yAxes: [{
          display: false,
          gridLines: {
            display:false
          },
          ticks: {
            beginAtZero: true,
            fontSize: 16,
            suggestedMin: 0,
            suggestedMax: 50
          }
        }]
      },
      plugins: {
        labels: {
          render: function () {
            return '';
          },
        },
        datalabels: {
          color: function(data) {
            if (data.dataset.data[data.dataIndex] > 10) {
              return '#fff';
            }
            return '#313131';
          },
          anchor: 'end',
          align: function(data) {
            if (data.dataset.data[data.dataIndex] > 10) {
              return 'bottom'
            }
            return 'top'
          },
          formatter: function(value, context) {
            return Math.round(value) + '%';
          },
          font: {
            weight: 'bold',
            size: fontSize,
          }
        }
      }
    }
  });
}

/* SOURCES OF FINANCIAL COMMITMENT GRAPH */
var sfcgraph;
function animateSFCGraph() {

  let fontSize = 16;
  if(screenWidth < 767) {
    fontSize = 10;
  }

  sfcgraph = new Chart(document.getElementById('sfcgraph'), {
    type: 'doughnut',
    data: {
      labels: SFC_LABELS,
      datasets: [{
        data: CURRENT_SFC_DATA,
        backgroundColor: [
          '#cae0f2',
          '#86bde0',
          '#5da6d8',
          '#0e76bc',
          '#094fa3',
        ]
      }]
    },
    options: {
      legend: {
        display: false,
      },
      plugins: {
        labels: {
          render: 'label',
          fontColor: '#313131',
          position: 'outside',
          textMargin: 10,
          fontSize: fontSize,
        },
        datalabels: {
          color: function(data) {
            if (data.dataIndex > 0) {
              return '#fff';
            }
            return '#313131';
          },
          anchor: 'center',
          align: 'center',
          formatter: function(value, context) {
            if (value !== 0) {
              return Math.round(value) + '%';
            } else {
              return '';
            }

          },
          font: {
            weight: 'bold',
            size:  fontSize,
          }
        }
      }
    }
  });
}

/* INVESTOR TRENDS - SOURCES OF TOTAL COMMITMENTS GRAPH */
var tcGraph;
function animateTCGraph() {

  let fontSize = 16;
  if(screenWidth < 767) {
    fontSize = 10;
  }

  tcGraph = new Chart(document.getElementById('totalcommitmentsgraph'), {
    type: 'doughnut',
    data: {
      labels: TC_LABELS,
      datasets: [{
        data: TC_2018_2020,
        backgroundColor: [
          '#cae0f2',
          '#86bde0',
          '#5da6d8',
          '#0e76bc',
          '#094fa3',
        ]
      }]
    },
    options: {
      legend: {
        display: false,
      },
      plugins: {
        labels: {
          render: 'label',
          fontColor: '#313131',
          position: 'outside',
          textMargin: 10,
          fontSize: fontSize,
        },
        datalabels: {
          color: function(data) {
            if (data.dataIndex > 0) {
              return '#fff';
            }
            return '#313131';
          },
          anchor: 'center',
          align: 'center',
          formatter: function(value, context) {
            if (value !== 0) {
              return Math.round(value) + '%';
            } else {
              return '';
            }

          },
          font: {
            weight: 'bold',
            size:  fontSize,
          }
        }
      }
    }
  });
}

/* INVESTOR TRENDS - SOURCES OF TOTAL COMMITMENTS GRAPH */
var ccGraph;
function animateCCGraph() {

  let fontSize = 16;
  if(screenWidth < 767) {
    fontSize = 10;
  }

  ccGraph = new Chart(document.getElementById('concessional-commitments-graph'), {
    type: 'doughnut',
    data: {
      labels: CC_LABELS,
      datasets: [{
        data: CC_2018_2020,
        backgroundColor: [
          '#cae0f2',
          '#86bde0',
          '#5da6d8',
          '#0e76bc',
          '#094fa3',
        ]
      }]
    },
    options: {
      legend: {
        display: false,
      },
      plugins: {
        labels: {
          render: 'label',
          fontColor: '#313131',
          position: 'outside',
          textMargin: 10,
          fontSize: fontSize,
        },
        datalabels: {
          color: function(data) {
            if (data.dataIndex > 0) {
              return '#fff';
            }
            return '#313131';
          },
          anchor: 'center',
          align: 'center',
          formatter: function(value, context) {
            if (value !== 0) {
              return Math.round(value) + '%';
            } else {
              return '';
            }

          },
          font: {
            weight: 'bold',
            size:  fontSize,
          }
        }
      }
    }
  });
}

/* Commercial Investors graph */
var ciGraph;
function animateCIGraph() {

  let fontSize = 16;
  if(screenWidth < 767) {
    fontSize = 10;
  }

  ciGraph = new Chart(document.getElementById('commercial-investors-graph'), {
    type: 'doughnut',
    data: {
      labels: CI_LABELS,
      datasets: [{
        data: CI_2018_2020,
        backgroundColor: [
          '#e5f1f9',
          '#cae0f2',
          '#86bde0',
          '#5da6d8',
          '#0e76bc',
          '#094fa3',
        ]
      }]
    },
    options: {
      legend: {
        display: false,
      },
      plugins: {
        labels: {
          render: 'label',
          fontColor: '#313131',
          position: 'outside',
          textMargin: 10,
          fontSize: fontSize,
        },
        datalabels: {
          color: function(data) {
            if (data.dataIndex > 0) {
              return '#fff';
            }
            return '#313131';
          },
          anchor: 'center',
          align: 'center',
          formatter: function(value, context) {
            if (value !== 0) {
              return Math.round(value) + '%';
            } else {
              return '';
            }

          },
          font: {
            weight: 'bold',
            size:  fontSize,
          }
        }
      }
    }
  });
}

/*OVERALL MARKETS GRAPH */

var omgraph;
function animateOMGraph() {
  omgraph = new Chart(document.getElementById('omgraph'), {
    type: 'bar',
    data: {
      labels: OM_LABELS,
      datasets: CURRENT_OM_DATASET
    },
    options: {
      legend: {
        display: false,
      },
      elements: {
        line: {
          tension: 0
        }
      },
      scales: {
        xAxes: [{
          display: true,
          stacked: true,
          gridLines: {
            display:false
          },
        }],
        yAxes: [
          {
            gridLines: {
              display:false
            },
            id: 'dollar-amount',
            /*type: 'linear',*/
            display: true,
            ticks: {
              beginAtZero: false,
              stepSize: 5,
              suggestedMax: 15,
              suggestedMin: 1,
              callback: function(value, index, values) {
                return '$' + value;
              }
            }
          },{
            gridLines: {
              display:false
            },
            id: 'transaction-count',
            display: false,
            stacked: true,
            ticks: {
              display: false,
              beginAtZero: true,
              suggestedMax: 75,
              suggestedMin: 0,
            }
          }]
      },
      plugins: {
        labels: {
          render: function () {
            return '';
          }
        },
        datalabels: {
          color: function(data) {
              if (data.dataset.label == 'Total Transaction Count (Closed)') {
                return '#fff';
              }
              return '#404041';
            },
          anchor: 'start',
          align: 'top',
          formatter: function(value, context) {
            if (value < 100000000 && value > 0) {
              return Math.round(value);
            } else {
              return '';
            }

          },
          font: {
            weight: 'bold',
            size: 16,
          }
        }
      }
    }
  });
}

// Graph Triggers
$('.graph-pill').on('click', function (e) {
  var id = $(this).data('id');
  var graph = $(this).data('graph');
  var type = $(this).data('type');
  console.log('ID = ' + id);
  if (type === 'single') {
    var selector = '#'+graph+ ' .graph-pill';
    $(selector).each(function() {
      $(this).removeClass('active');
    });
    $(this).addClass('active');
  } else {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).addClass('active');
    }
  }

  let updatedGraph = [];
  switch (graph) {
    case 'OM':
      OM_STATE[id] = !OM_STATE[id];
      if (OM_STATE.adc) {
        updatedGraph.push(OM_ADC_DATASET);
      }
      if (OM_STATE.fd) {
        updatedGraph.push(OM_FD_DATASET);
      }
      if (OM_STATE.af) {
        updatedGraph.push(OM_AF_DATASET);
      }
      if (updatedGraph.length === 0) {
        OM_STATE['adc'] = true;
        $('#'+graph + ' .graph-pill').first().addClass('active');
        updatedGraph.push(OM_ADC_DATASET);
      }
      CURRENT_OM_DATASET = updatedGraph;
      omgraph.data.datasets = updatedGraph;
      omgraph.update();
      break;
    case 'SECTORS':
      SECTORS_STATE[id] = !SECTORS_STATE[id];
      if (SECTORS_STATE['2015_2017']) {
        updatedGraph.push(SECTOR_2015_2017_DATASET);
      }
      if (SECTORS_STATE['2018']) {
        updatedGraph.push(SECTOR_2018_DATASET);
      }
      if (SECTORS_STATE['2019']) {
        updatedGraph.push(SECTOR_2019_DATASET);
      }
      if (SECTORS_STATE['2020']) {
        updatedGraph.push(SECTOR_2020_DATASET);
      }
      if (updatedGraph.length === 0) {
        SECTORS_STATE['2020'] = true;
        $('#'+graph + ' .graph-pill').first().addClass('active');
        updatedGraph.push(SECTOR_2020_DATASET);
      }
      SECTOR_CURRENT_DATASET = updatedGraph;
      sectorsgraph.data.datasets = updatedGraph;
      sectorsgraph.update();
      break;
    case 'COUNTRY_INCOME':
      COUNTRY_INCOME_STATE[id] = !COUNTRY_INCOME_STATE[id];
      if (COUNTRY_INCOME_STATE['20152017']) {
        updatedGraph.push(COUNTRY_INCOME_2015_2017_DATASET);
      }
      if (COUNTRY_INCOME_STATE['20182020']) {
        updatedGraph.push(COUNTRY_INCOME_2018_2020_DATASET);
      }
      if (updatedGraph.length === 0) {
        COUNTRY_INCOME_STATE['20182020'] = true;
        $('#'+graph + ' .graph-pill').first().addClass('active');
        updatedGraph.push(COUNTRY_INCOME_2018_2020_DATASET);
      }
      countryIncomeGraph.data.datasets = updatedGraph;
      countryIncomeGraph.update();
      break;
    case 'GN':
      GN_STATE[id] = !GN_STATE[id];
      if (GN_STATE['20152017']) {
        updatedGraph.push(GN_2015_2017_DATASET);
      }
      if (GN_STATE['20182020']) {
        updatedGraph.push(GN_2018_2020_DATASET);
      }
      if (updatedGraph.length === 0) {
        GN_STATE['20182020'] = true;
        $('#'+graph + ' .graph-pill').first().addClass('active');
        updatedGraph.push(GN_2018_2020_DATASET);
      }
      genderNexusgraph.data.datasets = updatedGraph;
      genderNexusgraph.update();
      break;
    case 'BENEF':
      switch(id) {
        case 'direct':
          beneficiariesGraph.data.datasets[0].data =
              DIRECT_2015_2017;
          beneficiariesGraph.data.datasets[1].data =
              DIRECT_2018_2020;
          beneficiariesGraph.data.labels = DIRECT_LABELS;
          beneficiariesGraph.update();
          break;
        case 'end':
          beneficiariesGraph.data.datasets[0].data =
              END_2015_2017;
          beneficiariesGraph.data.datasets[1].data =
              END_2018_2020;
          beneficiariesGraph.data.labels = END_LABELS;
          beneficiariesGraph.update();
          break;
      }
      break;
    case 'BA':
      BA_STATE[id] = !BA_STATE[id];
      if (BA_STATE['2015_2017']) {
        updatedGraph.push(BA_2015_2017_DATASET);
      }
      if (BA_STATE['2018']) {
        updatedGraph.push(BA_2018_DATASET);
      }
      if (BA_STATE['2019']) {
        updatedGraph.push(BA_2019_DATASET);
      }
      if (BA_STATE['2020']) {
        updatedGraph.push(BA_2020_DATASET);
      }
      if (updatedGraph.length === 0) {
        BA_STATE['2020'] = true;
        $('#'+graph + ' .graph-pill').first().addClass('active');
        updatedGraph.push(BA_2020_DATASET);
      }
      CURRENT_BA_DATASET = updatedGraph;
      bagraph.data.datasets = updatedGraph;
      bagraph.update();
      break;
    case 'ID':
      ID_STATE[id] = !ID_STATE[id];
      if (ID_STATE.all) {
        updatedGraph.push(ID_ALL_DATASET);
      }
      if (ID_STATE.recent) {
        updatedGraph.push(ID_RECENT_DATASET);
      }
      if (updatedGraph.length === 0) {
        ID_STATE['all'] = true;
        $('#'+graph + ' .graph-pill').first().addClass('active');
        updatedGraph.push(ID_ALL_DATASET);
      }
      CURRENT_ID_DATASET = updatedGraph;
      idgraph.data.datasets = updatedGraph;
      idgraph.update();
      break;
    case 'BF':
        if (id !== BF_STATE) {
          BF_STATE = id;
          updateBFChart();
        }
        break;
    case 'DST':
      switch(id) {
        case 'Bond-Note':
          DST_CURRENT_DATASET = DST_BOND_NOTE;
          dealssizesgraph.data.datasets[0].data = DST_BOND_NOTE;
          dealssizesgraph.update();
          break;
        case 'Company':
          DST_CURRENT_DATASET = DST_COMPANY;
          dealssizesgraph.data.datasets[0].data = DST_COMPANY;
          dealssizesgraph.update();
          break;
        case 'Fund':
          DST_CURRENT_DATASET = DST_FUND;
          dealssizesgraph.data.datasets[0].data = DST_FUND;
          dealssizesgraph.update();
          break;
        case 'DIB':
          DST_CURRENT_DATASET = DST_DIB;
          dealssizesgraph.data.datasets[0].data = DST_DIB;
          dealssizesgraph.update();
          break;
        case 'Facility':
          DST_CURRENT_DATASET = DST_FACILITY;
          dealssizesgraph.data.datasets[0].data = DST_FACILITY;
          dealssizesgraph.update();
          break;
        case 'Project':
          DST_CURRENT_DATASET = DST_PROJECT;
          dealssizesgraph.data.datasets[0].data = DST_PROJECT;
          dealssizesgraph.update();
          break;
      }
      break;
    case 'RM':
      let rm = '.regions-map';
      $(rm).removeClass('rm-2019');
      $(rm).removeClass('rm-2020');
      $(rm).removeClass('rm-2018');
      $(rm).removeClass('rm-20152017');
      let index = 0;
      switch(id) {
        case '2020':
        case 2020:
          $(rm).addClass('rm-2020');
          $('.rm-stats').each(function() {
            $(this).text(RM_2020[index] + '%');
            index++;
          });
          break;
        case '2019':
        case 2019:
          $(rm).addClass('rm-2019');
          $('.rm-stats').each(function() {
            $(this).text(RM_2019[index] + '%');
            index++;
          });
          break;
        case '2018':
        case 2018:
          $(rm).addClass('rm-2018');
          $('.rm-stats').each(function() {
            $(this).text(RM_2018[index] + '%');
            index++;
          });
          break;
        case 20152017:
          $(rm).addClass('rm-20152017');
          $('.rm-stats').each(function() {
            $(this).text(RM_2015_2017[index] + '%');
            index++;
          });
          break;
        default:
          break;
      }
      break;
    case 'SFC':
      switch(id) {
        case 'recent':
          CURRENT_SFC_DATA = SFC_RECENT;
          sfcgraph.data.datasets[0].data = SFC_RECENT;
          sfcgraph.update();
          break;
        default:
          CURRENT_SFC_DATA = SFC_ALL;
          sfcgraph.data.datasets[0].data = SFC_ALL;
          sfcgraph.update();
          break;
      }
      break;
    case 'TotalCommitments':
      if (id == '20182020') {
        tcGraph.data.datasets[0].data = TC_2018_2020;
      } else if (id == '20152017') {
        tcGraph.data.datasets[0].data = TC_2015_2017;
      } else if (id == '20122014') {
        tcGraph.data.datasets[0].data = TC_2012_2014;
      }
      tcGraph.update();
      break;
    case 'ConcessionalCommitments':
      if (id == '20182020') {
        ccGraph.data.datasets[0].data = CC_2018_2020;
      } else if (id == '20152017') {
        ccGraph.data.datasets[0].data = CC_2015_2017;
      } else if (id == '20122014') {
        ccGraph.data.datasets[0].data = CC_2012_2014;
      }
      ccGraph.update();
      break;
    case 'CommercialInvestors':
      if (id == '20182020') {
        ciGraph.data.datasets[0].data = CI_2018_2020;
      } else if (id == '20152017') {
        ciGraph.data.datasets[0].data = CI_2015_2017;
      } else if (id == '20122014') {
        ciGraph.data.datasets[0].data = CI_2012_2014;
      }
      ciGraph.update();
      break;
    default:
  }
});
