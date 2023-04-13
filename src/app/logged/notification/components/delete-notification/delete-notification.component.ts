import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NotificationResponsetDto } from 'src/app/dto/logged/notification-response.dto';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss']
})
export class DeleteNotificationComponent implements OnInit {
  form: FormGroup;
  request: NotificationResponsetDto;
  responseData: any;
  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      delete: [''],
    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
  }

  delete(){
    this.notificationService.deleteNotification(this.responseData._id).subscribe(
      success => {
        setTimeout(() => {
          window.location.reload();
        }, 2000)
        this.toastrService.success('Excluido com sucesso!', '', { progressBar: true });
        this.modalService.dismissAll();
      },
      error => {
        console.log(error)
        this.toastrService.error('Erro ao excluir', '', { progressBar: true });
      }
    )
  }

  exit() {
    this.modalService.dismissAll()
  }

}
