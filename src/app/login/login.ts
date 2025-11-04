import { Component, Inject  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    const { email, password } = this.form.value;

    if (this.form.valid) {
      this.http.post<{ message: string }>('http://localhost:8080/api/users/login', { email, password })
        .subscribe({
          next: (response) => {
            // Accedes al campo message del JSON recibido
            console.log('Mensaje del backend:', response.message);
            this.router.navigate(['/usuarios']); // redirige al CRUD usuarios
            alert(response.message); // Mostrar mensaje al usuario
            // Aquí puedes añadir redirección si login es exitoso
          },
          error: (error) => {
            console.error('Error en login', error);
            alert('Login fallido. Revisa tus credenciales.');
          }
        });
    }
  }
}
