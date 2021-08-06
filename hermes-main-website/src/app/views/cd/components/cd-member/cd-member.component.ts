import { Component, Input, OnInit } from '@angular/core';
import { CdServiceService } from 'src/app/services/cd-service.service';
import { Member } from 'src/assets/interfaces/member';

@Component({
  selector: 'app-cd-member',
  templateUrl: './cd-member.component.html',
  styleUrls: ['./cd-member.component.sass']
})
export class CdMemberComponent implements OnInit {

  @Input()
  private id?:number;
  private imagePath?:string;
  private facebookLink?: string;
  private description?: string;
  private name?:string;
  private departmentId?: number;
  private roleId?: number;
  private roleName?:string;
  private departmentName?: string;
  private cdService:CdServiceService;
  
  constructor(cdService:CdServiceService) { 
    this.cdService=cdService;
    this.cdService.getMembers().subscribe((abc: Member[])=>{console.log(abc)})

  }

  ngOnInit(): void {
    this.cdService.getMembers().subscribe((abc: Member[])=>{console.log(abc)})
  }

}
