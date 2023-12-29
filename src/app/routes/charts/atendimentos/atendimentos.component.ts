import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrl: './atendimentos.component.css',
})
export class AtendimentosComponent implements OnInit {
  selected = 'Esta semana';
  constructor(private router: Router) {}

  onBackToGraphMenu() {
    this.router.navigateByUrl('/home/graphmenu');
  }

  ngOnInit(): void {
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
              label: 'Atendimentos por mês - Quimioterapia',
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    })();

    (async function () {
      const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
        { year: 2017, count: 10 },
        { year: 2018, count: 20 },
        { year: 2019, count: 15 },
        { year: 2020, count: 25 },
        { year: 2021, count: 22 },
        { year: 2022, count: 30 },
        { year: 2023, count: 28 },
      ];

      new Chart('atendimentoChartDoughnut', {
        type: 'doughnut',
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map((row) => row.count),
            },
          ],
        },
      });
    })();
  }
}
