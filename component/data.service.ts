import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService{
    constructor(private http:HttpClient){}
    getDataTemplate(){
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/template")
    }

     postDataTemplate(data){
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/template",data);
    }

    getDataEvalutaion(){
        return this.http.get("https://opportunity-tracking-dev.mybluemix.net/api/evaluation")
    }

    postDataEvalutaion(data){
        return this.http.post("https://opportunity-tracking-dev.mybluemix.net/api/evaluation",data)
    }
} 