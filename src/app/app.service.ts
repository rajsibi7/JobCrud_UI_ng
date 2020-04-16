import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn : 'root'
})

export class JobService {

    homeURL:string = "http://localhost:3000/"

    constructor(private http : HttpClient ){

    }

    getJobs(id ?: string){
        let constructURL = this.homeURL+'jobs';
        if(id){
            constructURL += '/'+id; 
        }
        return this.http.get(constructURL);
    };

    createJob(v){
        let constructURL = this.homeURL+'jobs';
        return this.http.post(constructURL, v);
    }

    update(v, id){
        let constructURL = this.homeURL+'jobs/'+id;
        return this.http.put(constructURL, v)
    }
    deleteJob(id){
        let constructURL = this.homeURL+'jobs/'+id;
        return this.http.delete(constructURL);
    }

}