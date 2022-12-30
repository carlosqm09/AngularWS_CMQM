import { WelcomeService } from './welcome.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

   longText = "Mi nombre es Carlos Quijada, IS: CMQM , Soy de Merida. Yucatan";
   constructor(private welcomeService: WelcomeService){

   }

   ngOnInit(): void {
    this.welcomeService.getData().subscribe(data =>{
      if (data.my_data) {
        console.log(data.my_data)
      }
    })

   }
}
