import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  projectNumber= new Array(3).fill(false)
  clickedManuelly=false

  constructor() { }

  ngOnInit() {
    this.projectNumber[0]= true

    if(this.clickedManuelly==false){
      setTimeout(val=>{

        this.clickedManuelly=false
      },10000)
    }else{
      let value= this.autotransition()
      setInterval((val=>{
          this.projectNumber.fill(false)
          this.projectNumber[value++]=true
          if(value == 3){
            console.log('three');
            value=0;
          }
      }),5000)
    }

  

  }


  autotransition(){
    let val
    this.projectNumber.find((x,i)=>{
      if(x==true){
        val = i
        return val;
      }
    })
    return val;
  }

  select(val){
    this.clickedManuelly=true;
    if(val == 0){
      console.log('hi');

      this.projectNumber.fill(false)
      this.projectNumber[0]= true
      
    }else if(val == 1){
      console.log('hi');

      this.projectNumber.fill(false)
      this.projectNumber[1]= true
      
    }
    else if(val == 2){
      console.log('hi');

      this.projectNumber.fill(false)
      this.projectNumber[2]= true
      
    }
  }

}
