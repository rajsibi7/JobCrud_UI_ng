import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {NgForm} from '@angular/forms';
import { JobService } from '../app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.less']
})
export class AddjobComponent implements OnInit {

  jobValue : JobInterface;
  addAction : boolean = true;
  jobId : string;

  @ViewChild('f', { static: true }) formInpt: NgForm;
  constructor(private jobService :JobService, private route: ActivatedRoute, private router : Router) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(prms => {
      if(prms['params']['id']){
        this.addAction = false;
        this.jobId = prms['params']['id']
        this.getJobDetails();
      }
    });
  }

  onSubmit(f:NgForm){
    this.jobValue = JSON.parse(JSON.stringify(f.value));
    this.addJob();
  }

  addJob(){
    if(this.addAction){
      this.jobService.createJob(this.jobValue).subscribe((data)=>{
        console.log('addJob',data);
        this.router.navigate(['/dashboard']);
      })
    }
    else {
      this.jobService.update(this.jobValue,this.jobId).subscribe((data)=>{
        this.router.navigate(['/dashboard']);
      })
    }
  
  }

  getJobDetails(){
    this.jobService.getJobs(this.jobId).subscribe(data=>{
      delete data['_id'];  delete data['__v'];
      this.formInpt.setValue(data)
    },
    err =>{
      console.log(err)
    })
  }

}

export interface JobInterface {
  id? : string;
  title : string;
  description : string; 
}
