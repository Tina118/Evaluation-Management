import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute , Router } from '@angular/router';
import {NgForm} from '@angular/forms'


@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {
public allow : boolean = false
techno1
skill
lists
data
TEMPTECHNAME=[]
TEMPSKILL=[]
TEMPID=[];
EVALUATION_TEMP1={
NEW : [],
UPDATE : [],
DELETE : []
}
new=[];
update=[];
delete=[];
new1={TEMPSKILL : '',TEMPTECHNAME: ''}
update1={TEMPID : '',TEMPSKILL : ''}
delete1={TEMPID : ''}

  constructor(private ds:DataService,private router:Router){
    this.callDataServer();
  }
  callDataServer(){
    this.ds.getDataTemplate().subscribe( (res)=>{
      this.lists = res;
      this.data=this.lists.EVALUATION_TEMP;

    })
  }

  ngOnInit(): void {
  }

  value(skill,techno){
    if(skill=="" || techno==""){
      this.allow=false
    }else{
      this.allow=true
    }
  }

  add(skill,techno){
      this.new1.TEMPSKILL=skill;
      this.new1.TEMPTECHNAME=techno;
      this.new.push(this.new1);
      this.new1={TEMPSKILL : '',TEMPTECHNAME: ''}
      this.EVALUATION_TEMP1.NEW=this.new
      this.EVALUATION_TEMP1.UPDATE=this.update
      this.EVALUATION_TEMP1.DELETE=this.delete
      let final = {EVALUATION_TEMP : this.EVALUATION_TEMP1}
      console.log(final)

     this.ds.postDataTemplate(final).subscribe((res)=>{
      console.log(res)
      this.lists=res
    }) 

    }

}
