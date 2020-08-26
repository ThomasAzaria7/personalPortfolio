import { Component, OnInit } from '@angular/core';
import {app} from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'professionalPortfolio';
  codeCamp=false
  showContent(){
    this.codeCamp=true;
  }

  resumeLink

  ngOnInit(){
    var starsRef= app().storage().refFromURL('gs://thomasazaria07.appspot.com/Developer.docx').getDownloadURL(
      ).then((url)=>{
        this.resumeLink=url
      console.log(url);
      })
  }

  navClick(value){

    console.log(value);
    

    if(value =='contact'){
    scrollTo(0,1500);

    }else{
      scrollTo(0,0);

    }


  }

  
}
