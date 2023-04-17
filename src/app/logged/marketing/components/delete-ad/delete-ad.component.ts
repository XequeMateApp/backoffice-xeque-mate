import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { MarketingService } from 'src/services/marketing.service';

@Component({
  selector: 'app-delete-ad',
  templateUrl: './delete-ad.component.html',
  styleUrls: ['./delete-ad.component.scss']
})
export class DeleteAdComponent implements OnInit {

  responseData: any;
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private marketingService: MarketingService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      delete: [''],
    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
  }

  delete() {
    this.marketingService.deleteMarketing(this.responseData._id).subscribe({
      next: data => {
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true })
        this.modalService.dismissAll()

      },
      error: error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir!', '', { progressBar: true });
      }
    }
    )
  }

  exit() {
    this.modalService.dismissAll()
  }
}
