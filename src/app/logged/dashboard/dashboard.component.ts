import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { ProductService } from 'src/services/products.service';
import { UserService } from 'src/services/user.service';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  dropDatas = '7 dias';

  totalProducts: string = '';
  totalProductsFiltered: string = '';
  totalClients: string = '';

  daysFilter: number = 7

  constructor(
    private productService: ProductService,
    private userService: UserService
  ) {
    this.chartOptions = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {

        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      }
    };

  }
  ngOnInit(): void {
    this.getProducts();
    this.getClients();
    this.getAllProductsFiltered(this.daysFilter);
  }

  changeDatas(value: string) {
    if (value === '7days') {
      this.dropDatas = '7 dias'
    } else if (value === '15days') {
      this.dropDatas = '15 dias'
    } else if (value === '1month') {
      this.dropDatas = '1 mês'
    }
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(
      success => {
        this.totalProducts = success.count.toString();
        console.log('Produtos Cadastrados', success.count);
      },
      error => { console.error(error, 'Erro ao recuperar dados') }
    )
  }

  getClients() {
    this.userService.getAllClients().subscribe(
      success => {
        this.totalClients = success.length.toString();
        console.log('Total de clientes', success.length);
      },
      error => { console.error(error, 'Erro ao recuperar dados') }
    )
  }

  getAllProductsFiltered(days: number) {
    this.productService.getAllFilteredProductsByDate(days).subscribe(
      success => {
        // this.totalProducts = success.count.toString();
        console.log('produtos filtrados', success);
      },
      error => { console.error(error, 'Erro ao recuperar dados') }
    )
  }
}
