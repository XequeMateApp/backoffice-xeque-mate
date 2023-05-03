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
  date: Date;

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
    const dateTime = new Date(this.responseData.start);
    const time = dateTime.toLocaleTimeString();
    this.form.controls['name'].setValue(this.responseData.name)
    this.form.controls['textarea'].setValue(this.responseData.content)
    this.form.controls['repetition'].setValue(this.responseData.repetition)
    this.form.patchValue({ dateStart: dateTime.toISOString().substring(0, 10) });
    this.form.controls['time'].setValue(time)
    this.form.controls['status'].setValue(this.responseData.status)
    this.form.controls['filter'].setValue(this.responseData.filter)
  }

  filterForm(value: string){
    this.filterValue = value;
  }

  changeDate(){
    const { dateStart, time } = this.form.value;
    const timeParts = time.split(':');
     this.date = new Date(dateStart);
    if ( this.date instanceof Date && !isNaN(Number( this.date))) {
      this.date.setHours(parseInt(timeParts[0], 10));
      this.date.setMinutes(parseInt(timeParts[1], 10));
      console.log( this.date);
    }
  }


  confirm(): void {
    this.changeDate();
    this.form.controls['dateStart'].value
    this.request = {
      name: this.form.controls['name'].value,
      status: this.form.controls['status'].value,
      content: this.form.controls['textarea'].value,
      repetition: this.form.controls['repetition'].value,
      start: this.date,
      hour: ' ',
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
