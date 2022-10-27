import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  private userVinSubscription: Subscription;

  constructor (private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit () {
    this.userForm = this.fb.group ({
      vin: (''),
      name: (''),
      tel: (''),
      address: (''),
      data: ('')
    })

  }

  ngOnDestroy() {
    this.userVinSubscription.unsubscribe();
  }

  public onSubmit (): void{
    /*const controls = this.userForm.controls;

    Object.keys(controls).forEach(key => {
      controls[key].markAsTouched();
    })*/
  }
 

}
