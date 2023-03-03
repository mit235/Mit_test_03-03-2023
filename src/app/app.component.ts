import { Component } from '@angular/core';
import { DataServiceService } from './service/data-service.service';
import { program } from '../app/model/Program';
import { project } from './model/Project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Test2';
  constructor(private service: DataServiceService) {
    this.service.getVirtualProjects().subscribe((res: any) => {
      this.projectList = res;
      console.warn('ProjectList', this.projectList);
    });
  }

  items: any;
  projectList: project[] = [];
  programList: program[] = [];
  resultArray: project[] = [];
  selectPrograms: any = [];
  final: project[]= [];
  Newfinal:any[]=[];
  

  onCheckboxChange(item: any, event: any) {
    item.selected = event.target.checked;
  }
  getData() {
    this.service.getAllActiveVirtualPrograms().subscribe((res) => {
      this.programList = res;
      console.warn('mit', this.programList);
    });
  }

  getProject(data: any) {
    console.warn('programID', data);
    this.selectPrograms.push(data);

    // this.resultArray=this.projectList.filter((item)=>item.programID==this.selectPrograms.programID)
    //  console.warn('id array',this.selectPrograms)
  console.warn("all Selected Id",this.selectPrograms)
    this.projectList.forEach((data) => {
      this.selectPrograms.forEach((res: any) => {
        if (data.programID == res && this.final.findIndex(ap => ap.projectName == data.projectName)==-1) {
          this.final.push(data);
        }
      });
    });
    // this.final = Array.from(new Set(this.final));
   
  //  this.Newfinal = this.final.filter((value, index, self) => self.indexOf(value) === index);


  }
}
