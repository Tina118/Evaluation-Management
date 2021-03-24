import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent {
  public allow:boolean = false
  arr=[]
  list
  lists
  data
  lists1
  new={}
  TEMPTECHNAME=[];
  TEMPSKILL=[]
  TEMPID=[];
  count=0
  skills={Skill : "",Score : ""}
  EVALUATION=[]
  new1={EVALNAME  : "" ,APPLICANTNAME: "" ,EVALUATORNAME : "" ,EVALSKILL : "" ,EVALSCORE : ""}
  
  public displaying : boolean = false
  public sub : boolean = true
    date=new Observable<string>(res => {
     setInterval(()=>res.next(new Date().toLocaleDateString()),1000)
   })

   constructor(private ds:DataService,private http: HttpClient,private router:Router){
    this.callDataServer();
  }
  callDataServer(){
    this.ds.getDataTemplate().subscribe( (res)=>{
      this.lists = res;
      this.data=this.lists.EVALUATION_TEMP;
      for(let i=0;i<this.data.length;i++){
          this.TEMPTECHNAME.push(this.data[i].TEMPTECHNAME)
      }
      this.data= this.data.filter(function (el) {
        return (el != null && el != "") ;
      });

    })
  }

  ngOnInit(): void {
    
  }

  techno(item){
    this.displaying=true
    console.log(item)
    this.http.get('https://opportunity-tracking-dev.mybluemix.net/api/template/'+item).subscribe((res)=>{
      this.lists1 = res;
      //console.log(this.lists1)
      this.data=this.lists1.body;

  
      for(let i=0;i<this.data.length;i++){
        if(this.count!=0){
          this.TEMPSKILL=[];
          this.skills={Skill : "",Score: ""}
          
          this.count=0
        }
          if(this.TEMPSKILL.indexOf(this.data[i].TEMPSKILL) === -1){
          this.TEMPSKILL.push(this.data[i].TEMPSKILL)
          this.skills.Skill=this.data[i].TEMPSKILL
          this.skills.Skill=this.data[i].TEMPSKILL
          this.skills.Score="0"
          this.arr.push(this.skills)
          this.skills={Skill : "",Score: ""}
          }

      }
      this.count+=1
    
  })
}



scores(name,ename,tech,skill,score){
      this.new1.EVALNAME=tech
      this.new1.APPLICANTNAME=name
      this.new1.EVALUATORNAME=ename
      this.new1.EVALSKILL=skill
      this.new1.EVALSCORE=score
      this.EVALUATION.push(this.new1)
      this.new1={EVALNAME  : "" ,APPLICANTNAME: "" ,EVALUATORNAME : "" ,EVALSKILL : "" ,EVALSCORE : ""}
}



value(name,ename,techno){
  if(name=="" || ename=="" || techno==""){
    this.allow=false
  }else{
      this.allow=true
  }
}


     display(name,ename,techno){
       
       for(let i=0;i<this.TEMPSKILL.length;i++){
         if (this.EVALUATION.some(item => item.EVALSKILL === this.TEMPSKILL[i])){
           continue;
         }else{
          this.new1.EVALNAME=techno
          this.new1.APPLICANTNAME=name
          this.new1.EVALUATORNAME=ename
          this.new1.EVALSKILL=this.TEMPSKILL[i]
          this.new1.EVALSCORE="0"
          this.EVALUATION.push(this.new1)
          this.new1={EVALNAME  : "" ,APPLICANTNAME: "" ,EVALUATORNAME : "" ,EVALSKILL : "" ,EVALSCORE : ""}
         }
         
        }
           this.displaying=false
          let final={ EVALUATION : this.EVALUATION}
          console.log(final)
          //this.ds.postDataEvalutaion(final).subscribe((res)=>{})
    }
      
}



   

  
  
