import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import {EmployeeService} from '../../services/employee.service';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployes();
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }


  }

  
  addEmployee(form:NgForm){
    if(form.value._id){
      this.employeeService.putEmployee(form.value)
        .subscribe(res=>{
          this.resetForm(form);
          M.toast({html: 'Empleado Actualizado satisfactoriamente'});
          this.getEmployes();
        });
    }else{
    this.employeeService.postEmployee(form.value)
      .subscribe(res=>{
        this.resetForm(form);
        M.toast({html: 'Empleado Guardado satisfactoriamente'});
        this.getEmployes();
      });
    }
    
  }

  getEmployes(){
    this.employeeService.getEmpleoyees()
      .subscribe(res=>{
        this.employeeService.employees = res as Employee[];
        console.log(res);
      });

  }

  editEmployee(employee: Employee){
    this.employeeService.selectedEmployee = employee;

  }

  deleteEmployee(_id:string){
   
   if(confirm('Seguro que desea eliminar?')){
    this.employeeService.deleteEmployee(_id)
      .subscribe(res=>{
        M.toast({html: 'Empleado eliminado satisfactoriamente'});
        this.getEmployes();

      })
   }

  }
}
