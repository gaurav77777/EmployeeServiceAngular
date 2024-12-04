import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-employee-form',
  standalone: true,  // Mark this component as standalone
  imports: [FormsModule , RouterModule],  // Add FormsModule to the imports array here
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  employee = { id: 0, name: '', email: '', position: '' };
  isEdit: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.employeeService.getEmployeeById(+id).subscribe((data) => {
        this.employee = data;
      });
    }
  }

  onSubmit(): void {
    if (this.isEdit) {
      this.employeeService.updateEmployee(this.employee.id, this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
