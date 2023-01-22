import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Chartist from 'chartist';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  lineChart1: any;
  lineChart: any;
  lineChart3: any;

  constructor(
    private elementRef: ElementRef
  ) {
  }
  ngOnInit() {
    this.dailysChart();
    this.websiteViewsChart();
    this.completedTasksChart();
  }

  dailysChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#myChart1`);
    this.lineChart = new Chart(htmlRef, {
      type: 'bar',
      options: {
        scales: {
          y: {
            grid: {
              color: 'white',
              borderDash: [5],
            },
            ticks: {
              color: 'white',
              font: {
                size: 18,
              },
              stepSize: 1,
            }
          },
          x: {
            grid: {
              color: 'white',
              borderDash: [5],
            },
            ticks: {
              color: 'white',
              font: {
                size: 14
              },
            }
          },
          legend: {
            display: false
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',
              font: {
                size: 18
              }
            }
          }
        },
      },
      data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'N', 'D'],
        datasets: [
          {
            label: 'Daily Sales',
            backgroundColor: 'rgba(255,255,255,1)',
            borderColor: 'rgba(255,255,255,1)',
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
          }
        ]
      }
    });
  }

  websiteViewsChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#myChart`);
    this.lineChart = new Chart(htmlRef, {
      type: 'line',
      options: {
        scales: {
          y: {
            grid: {
              color: 'white',
              borderDash: [5],
            },
            ticks: {
              color: 'white',
              font: {
                size: 18,
              },
              stepSize: 1,
            }
          },
          x: {
            grid: {
              color: 'white',
              borderDash: [5],
            },
            ticks: {
              color: 'white',
              font: {
                size: 14
              },
            }
          },
          legend: {
            display: false
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',
              font: {
                size: 18
              }
            }
          }
        },
      },
      data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'N', 'D'],
        datasets: [
          {
            label: 'Email Subscriptions',
            fill: false,
            // lineTension: 0.1,
            backgroundColor: 'rgba(255,255,255,1)',
            borderColor: 'rgba(255,255,255,1)',
            // borderCapStyle: 'butt',
            borderWidth: 4,
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,255,255,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 4,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,255,255,1)',
            pointHoverBorderColor: 'rgba(255,255,255,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    });
  }

  completedTasksChart() {
    const htmlRef = this.elementRef.nativeElement.querySelector(`#myChart3`);
    this.lineChart3 = new Chart(htmlRef, {
      type: 'bar',
      options: {
        scales: {
          y: {
            grid: {
              color: 'white',
              borderDash: [5],
            },
            ticks: {
              color: 'white',
              font: {
                size: 18,
              },
              stepSize: 1,
            }
          },
          x: {
            grid: {
              color: 'white',
              borderDash: [5],
            },
            ticks: {
              color: 'white',
              font: {
                size: 14
              },
            }
          },
          legend: {
            display: false
          }
        },
        plugins: {
          legend: {
            labels: {
              color: 'white',
              font: {
                size: 18
              }
            }
          }
        },
      },
      data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'N', 'D'],
        datasets: [
          {
            label: 'Completed Tasks',
            backgroundColor: 'rgba(255,255,255,1)',
            borderColor: 'rgba(255,255,255,1)',
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
          }
        ]
      }
    });
  }
}
