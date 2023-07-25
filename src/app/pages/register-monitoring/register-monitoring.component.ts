import { Component } from '@angular/core';
import { RegisterService } from 'src/app/shared/services/register.service';
import { Router } from '@angular/router';
import { PedagogicalMonitoring } from 'src/app/shared/models/pedagogicalMonitoring.model';

@Component({
  selector: 'app-register-monitoring',
  templateUrl: './register-monitoring.component.html',
  styleUrls: ['./register-monitoring.component.css']
})
export class RegisterMonitoringComponent {

  monitoring: PedagogicalMonitoring = {
    student: '',
    teacher: '',
    title: '',
    date: '',
    description: '',
    finished: false
  }

  constructor(private registerService: RegisterService, private route: Router) {}

  register(outputData: PedagogicalMonitoring) {
    this.monitoring = outputData
    this.registerService.postPedagogicalMonitoring(outputData)
      .subscribe((result: any) => {
        console.log(result)
        alert("Pedagogical monitoring registered with success.")
        this.route.navigate(['/list-monitorings'])
      })
  }
}