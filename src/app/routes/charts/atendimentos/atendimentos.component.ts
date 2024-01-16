import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';
import { WebsocketService } from '../../../_services/websocket.service';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrl: './atendimentos.component.css',
})
export class AtendimentosComponent implements AfterViewInit {
  public chart: any;
  constructor(
    private router: Router,
    private websocketService: WebsocketService
  ) {}

  onBackToGraphMenu() {
    this.router.navigateByUrl('/home/graphmenu');
  }

  private startDate = '2023-05-05T00:00:01';
  private endDate = '2023-06-06T00:00:01';

  ngAfterViewInit(): void {
    this.websocketService.dataModel.subscribe((p) => {
      console.log(p);
    });
    (async function () {
      const data = [
        { year: 'Jan', count: 10 },
        { year: 'Fev', count: 20 },
        { year: 'Mar', count: 15 },
        { year: 'Abr', count: 25 },
        { year: 'Mai', count: 22 },
        { year: 'Jun', count: 30 },
        { year: 'Jul', count: 28 },
        { year: 'Ago', count: 10 },
        { year: 'Set', count: 20 },
        { year: 'Out', count: 15 },
        { year: 'Nov', count: 25 },
        { year: 'Dez', count: 22 },
      ];

      new Chart('atendimentoChartBar', {
        type: 'bar',
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Atendimentos por mês',
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    })();

    (async function () {
      const data = [
        { year: 'Jan', count: 10 },
        { year: 'Fev', count: 20 },
        { year: 'Mar', count: 15 },
        { year: 'Abr', count: 25 },
        { year: 'Mai', count: 22 },
        { year: 'Jun', count: 30 },
        { year: 'Jul', count: 28 },
        { year: 'Ago', count: 10 },
        { year: 'Set', count: 20 },
        { year: 'Out', count: 15 },
        { year: 'Nov', count: 25 },
        { year: 'Dez', count: 22 },
      ];

      new Chart('atendimentoChartDoughnut', {
        type: 'doughnut',
        data: {
          labels: ['Atendimento por convênio'],
          //labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    })();

    this.chart = new Chart('atendimentoChartBarFull', {
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Consulta',
            data: [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Exames',
            data: [26, 29, 31, 24, 10, 3, 14, 16, 4, 5, 14, 23],
            borderColor: 'rgb(54, 162, 235)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 2,
            pointBackgroundColor: 'rgb(54, 162, 235)',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
          },
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            bodyFont: {
              size: 14,
            },
            titleFont: {
              size: 16,
              weight: 'bold',
            },
          },
          legend: {
            labels: {
              font: {
                size: 14,
              },
            },
          },
        },
      },
    });
  }
}
