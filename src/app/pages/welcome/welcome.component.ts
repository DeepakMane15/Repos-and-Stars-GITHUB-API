import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RepoService } from 'src/app/services/repo.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
public name:any ="qwe";
reactiveForm: any;
dataSet:any;
public error:any;
isSpinning=true;
  constructor(private formBuilder: FormBuilder, private service:RepoService) { }

  ngOnInit() {

this.reactiveForm = this.formBuilder.group({
  name: [''],
});
  }

  onSubmit() {
    if(this.reactiveForm.value['name'] === ''){
      this.error='Please enter repository name';
    } else{
      this.error='';
    console.log(this.reactiveForm.value);
    this.service.get(this.reactiveForm.value).subscribe((res) => {
      console.log(res);
      this.dataSet = res;
    },(err) => {
      if(err.status === 404){
        this.dataSet = [];
        this.error = this.reactiveForm.value['name']+' Repository does not exists'
      }
    })
  }}
}
