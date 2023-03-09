import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-notification',
  templateUrl: './delete-notification.component.html',
  styleUrls: ['./delete-notification.component.scss']
})
export class DeleteNotificationComponent implements OnInit {
  form: FormGroup;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      delete: [''],
    })
  }
  ngOnInit(): void {

  }
  exit() {
    this.modalService.dismissAll()
  }
  delete(){
    window.alert('Delete  ')
  }
}
