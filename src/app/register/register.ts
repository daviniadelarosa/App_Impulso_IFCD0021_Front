import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-register', 
  styleUrls:["./register.css"],
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.html'
})
export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  submit() {
    const { email, password, confirmPassword } = this.form.value;

    if (this.form.valid && password === confirmPassword) {
      this.http.post('http://localhost:8080/api/auth/register', { email, password })
        .subscribe({
          next: () => alert('Registro exitoso'),
          error: err => alert('Error: ' + err.message)
        });
    } else {
      alert('Formulario inválido o contraseñas no coinciden');
    }
  }
}
