import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.scss']
})
export class DeleteCategoryComponent implements OnInit {
  responseData: any;
  constructor(
    private modalService: NgbModal,
    private categoryServer: CategoryService,
    private toastrService: ToastrService,
  ) {
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
  }
  exit() {
    this.modalService.dismissAll();

  }
  delete() {
    this.categoryServer.deleteCategory(this.responseData._id).subscribe(
      success => {
        setTimeout(() => {
          window.location.reload();
        }, 200)
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir', '', { progressBar: true });
      }
    )
  }
}
