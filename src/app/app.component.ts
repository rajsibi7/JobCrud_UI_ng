import { Component } from '@angular/core';
import { JobService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ecom-proj1';
 
  jobList : any;

  constructor(private jobService :JobService){

  }

  ngOnInit(){
  //  this.jobList = [
  //    {
  //      title : "Exercise Regularly",
  //      description : "Your body is your most important tool."
  //    },
  //    {
  //     title : "Eat Healthy",
  //     description : "Food is fuel for your body."
  //   },
  //   {
  //     title : "Meditate",
  //     description : "Meditation is self-observation."
  //   }
  //  ];

  //  this.getJobList();
 }

//  getJobList(){
//   this.jobService.getJobs().subscribe(data=>{
//     this.jobList = data;
//   },
//   err =>{
//     console.log(err)
//   })
//  }
}
