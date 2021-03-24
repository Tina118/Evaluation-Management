import { Component} from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-allevaluation',
  templateUrl: './allevaluation.component.html',
  styleUrls: ['./allevaluation.component.css']
})
export class AllevaluationComponent {
  public dataAvailable:boolean = true
  unique=[]
  itemsFound={}
  lists
  data
  datas=[]
  Data={APPLICANTNAME : '',EVALUATORNAME: '',EVALNAME : ''}

  constructor(private ds:DataService,private router:Router){
   this.callDataServer();
 }
 callDataServer(){
   this.ds.getDataEvalutaion().subscribe((res)=>{
     this.lists = res;
     this.data=this.lists.EVALUATION;
    if(this.data.length===0){
      this.dataAvailable=false;
    }else{
     for(let i=0;i<this.data.length;i++){
       this.Data.APPLICANTNAME=this.data[i].APPLICANTNAME
       this.Data.EVALUATORNAME=this.data[i].EVALUATORNAME
       this.Data.EVALNAME=this.data[i].EVALNAME
       this.datas.push(this.Data)
       this.Data={APPLICANTNAME : '',EVALUATORNAME: '',EVALNAME : ''}
     }

     for(let val of this.datas){
      let stringified = JSON.stringify(val);
      if(this.itemsFound[stringified]) { 
        continue; 
     }
     this.unique.push(val);
     this.itemsFound[stringified] = true;
     }

    }
   })
  
 }

 submit(value){
  this.router.navigate(['/allevaluation/'+value]); 
 } 

}
