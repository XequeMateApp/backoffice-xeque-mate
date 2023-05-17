import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/services/products.service';

@Component({
  selector: 'app-delete-unity',
  templateUrl: './delete-unity.component.html',
  styleUrls: ['./delete-unity.component.scss']
})
export class DeleteUnityComponent implements OnInit {

  responseData: any;
  constructor(
    private modalService: NgbModal,
    private productService: ProductService,
    private toastrService: ToastrService,
  ) {
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
  }

  delete() {
    this.productService.unityDelete(this.responseData._id).subscribe({
      next: data => {
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true })
        this.modalService.dismissAll()
      },
      error: error => {
        console.log(error)
        this.toastrService.error('Erro ao Excluir!', '', { progressBar: true });
      }
    })
  }

  exit() {
    this.modalService.dismissAll()
  }
}
