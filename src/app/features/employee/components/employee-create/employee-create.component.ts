import { Component, OnInit,EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-create-modal',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['M', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    const formValues = this.employeeForm.value;

    const payload = {
      ime: formValues.firstName,
      prezime: formValues.lastName,
      email: formValues.email,
      brojTelefona: formValues.phoneNumber,
      datumRodjenja: formValues.birthDate,
      pol: formValues.gender
    };

    this.employeeService.createEmployee(payload).subscribe({
      next: () => {
        this.router.navigate(['/employees']);
      },
      error: (err) => {
        console.error('Greška pri kreiranju zaposlenog:', err);
      }
    });
  }
}