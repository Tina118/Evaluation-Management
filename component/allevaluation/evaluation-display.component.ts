import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-evaluation-display',
  templateUrl: './evaluation-display.component.html',
  styleUrls: ['./allevaluation.component.css']
})
export class EvaluationDisplayComponent implements OnInit {
  selectedItems
  lists
  data
  datas=[]
  Data={APPLICANTNAME : '',EVALUATORNAME: '',EVALNAME : '',EVALSKILL : '',EVALSCORE : ''}
  constructor(private actRoute:ActivatedRoute,private router:Router,private http: HttpClient) { }

  ngOnInit(){
    this.selectedItems = this.actRoute.snapshot.params['qty'];
    console.log(this.selectedItems)
    this.http.get('https://opportunity-tracking-dev.mybluemix.net/api/evaluation/'+this.selectedItems).subscribe((res)=>{
      this.lists = res;
      console.log(this.lists)
      this.data=this.lists.body;
      for(let i=0;i<this.data.length;i++){
        this.Data.APPLICANTNAME=this.data[i].APPLICANTNAME
        this.Data.EVALUATORNAME=this.data[i].EVALUATORNAME
        this.Data.EVALNAME=this.data[i].EVALNAME
        this.Data.EVALSKILL=this.data[i].EVALSKILL
        this.Data.EVALSCORE=this.data[i].EVALSCORE
        this.datas.push(this.Data)
        this.Data={APPLICANTNAME : '',EVALUATORNAME: '',EVALNAME : '',EVALSKILL : '',EVALSCORE : ''}
      }
      
    })
  }

  submit(){
    this.router.navigate(['/allevaluation/']);
  }

}
