import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tel',
  templateUrl: './tel.component.html',
  styleUrls: ['./tel.component.scss']
})
export class TelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*static tel(control: Control): ValidationResult {

    let URL_REGEXP = /^\(\d{3}\)-\d{3}-\d{4}$/i;

    if (control.value && (control.value.length <= 5 || !URL_REGEXP.test(control.value))) {

        return {"tel": true};
    }

    return null;*/

}


/*  element = document.getElementById('tel');
  maskOptions = {
      mask: '+7(000)000-00-00',
      lazy: false
  } 
  mask = new IMask(element, maskOptions);*/



