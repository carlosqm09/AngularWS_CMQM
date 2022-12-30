import {Component,EventEmitter,Inject,Input,Output,OnInit} from '@angular/core';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
  import { UnicornsService } from './unicorns.service';
  
  @Component({
    selector: 'app-unicorns-update',
    templateUrl: './unicorns-update.component.html',
  })
  export class UnicornsUpdateComponent implements OnInit {
    constructor(
      private dialogRef: MatDialogRef<UnicornsUpdateComponent>,
      @Inject(MAT_DIALOG_DATA) public unicorn: any,
      private unicornService: UnicornsService
    ) {}
  
    ngOnInit(): void {
      if (!this.unicorn) {
        this.unicorn = { name: '', colour: '', age: 0 };
      }
    }
  
    getData(event: any): void {
      this.unicorn.name = event;
    }

    getColor(event: any): void {
        this.unicorn.colour = event;
    }

    getEdad(event: any): void {
      this.unicorn.age = event;
    }
    
    save(): void {
      if (this.unicorn._id) {
        this.unicornService
          .putUnicorn(this.unicorn, this.unicorn._id)
          .subscribe((res) => {
            this.dialogRef.close(res.status);
          });
      } else {
        this.unicornService.postUnicorn(this.unicorn).subscribe((res) => {
          this.dialogRef.close(res.status);
        });
      }
    }
  }