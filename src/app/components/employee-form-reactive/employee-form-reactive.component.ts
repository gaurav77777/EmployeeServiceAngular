import { Component , OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import necessary form modules
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-employee-form-reactive',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './employee-form-reactive.component.html',
  styleUrl: './employee-form-reactive.component.css'
})
export class EmployeeFormReactiveComponent implements OnInit{

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with form controls and validators
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],  // Name field with required validation
      email: ['', [Validators.required, Validators.email]],  // Email field with required and email validation
      position: ['', [Validators.required]]  // Position field with required validation
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.employeeForm.valid) {
      console.log('Form Submitted!', this.employeeForm.value);
    }
  }

}
