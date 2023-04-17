import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NotificationRegisterRequestDto } from 'src/app/dto/logged/notification-register-request.dto';
import { NotificationService } from 'src/services/notification.service';

@Component({
  selector: 'app-edit-notification',
  templateUrl: './edit-notification.component.html',
  styleUrls: ['./edit-notification.component.scss']
})
export class EditNotificationComponent implements OnInit {
  form: FormGroup;
  request: NotificationRegisterRequestDto;
  responseData: any;
  editNotStatus: string;
  editNotRepetition: string;
  editNotFunction: string;
  filterValue: string;

  constructor(
    private modalService: NgbModal,
    private toastrService: ToastrService,
    private notificationService: NotificationService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: [''],
      status: [''],
      textarea: [''],
      repetition: [''],
      dateStart: [''],
      time: [''],
      filter: [''],
    })
  }
  ngOnInit(): void {
    this.responseData = JSON.parse(localStorage.getItem('responseData'));
    console.log(this.responseData)
    this.editNotStatus = this.responseData.status;
    this.editNotRepetition = this.responseData.repetition;
    this.editNotFunction = this.responseData.function;
    this.form.controls['name'].setValue(this.responseData.name)
    this.form.controls['textarea'].setValue(this.responseData.content)
    this.form.controls['repetition'].setValue(this.responseData.repetition)
    this.form.controls['dateStart'].setValue(this.responseData.start)
    this.form.controls['time'].setValue(this.responseData.hour)
    this.form.controls['status'].setValue(this.responseData.status)
    this.form.controls['filter'].setValue(this.responseData.filter)
  }

  filterForm(value: string){
    this.filterValue = value;
  }

  confirm(): void {
    this.request = {
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      content: this.form.controls['textarea'].value,
      repetition: this.form.controls['repetition'].value,
      start: this.form.controls['dateStart'].value,
      hour: this.form.controls['time'].value,
      filter: this.filterValue
    }
    console.log(this.request)
      this.notificationService.editNotification(this.responseData._id, this.request).subscribe(
        success => {
          this.toastrService.success('Editado com sucesso!', '', { progressBar: true });
          this.modalService.dismissAll();
        },
        error => {
          console.log(error)
          this.toastrService.error('Erro ao editar', '', { progressBar: true });
        }
      )
  }

  exit() {
    this.modalService.dismissAll()
  }

}
