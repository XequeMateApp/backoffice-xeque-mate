import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaginationInstance } from 'ngx-pagination';
import LocalStorageUtil, { LocalStorageKeys } from 'src/app/utils/localstorage.util';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { DeleteAdComponent } from './components/delete-ad/delete-ad.component';
import { MarketingService } from 'src/services/marketing.service';
import { MarketingResponseDto } from 'src/app/dto/logged/marketing-response.dto';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.scss']
})
export class MarketingComponent implements OnInit {

  response: MarketingResponseDto[] = [];

  @Input('data') meals: string[] = [];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1
  };
  filterTerm!: string;
  constructor(
    private router: Router,
    private marketingService: MarketingService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.getMarketing();
  }

  getMarketing() {
    this.marketingService.getMarketing().subscribe(
      success => {
        this.response = success;
        console.log(this.response)
      },
      error => { console.error(error, 'data not collected') }
    );
  }


  backHome(){
    this.router.navigate(['/logged/dashboard']);
  }

  createOpenModal(){
    const modal = this.modalService.open(CreateAdComponent, { centered: true, backdrop: 'static', keyboard: false })
    modal.result.then((result) => {
    }, err => {
      this.getMarketing();
    })
  }

  openModals(tabName: string, info: string[]) {
    LocalStorageUtil.set(LocalStorageKeys.responseData, info);
    if (tabName === 'edit') {
      const modal = this.modalService.open(EditAdComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getMarketing();
      })
    } else if (tabName === 'delete') {
      const modal = this.modalService.open(DeleteAdComponent, { centered: true, backdrop: 'static', keyboard: false })
      modal.result.then((result) => {
      }, err => {
        this.getMarketing();
      })
    }
  }
  sortListByAlphabeticalOrder(): void {
    this.response.sort((a, b) => {
      return a.title.localeCompare(b.title);
    }
    );
  }
  sortListByType(value: string) {
    if (value === 'active') this.response.sort((a, b) => { return a.status.localeCompare(b.status); });
    else if (value === 'inactive') this.response.sort((a, b) => { return b.status.localeCompare(a.status); });
  }
}


