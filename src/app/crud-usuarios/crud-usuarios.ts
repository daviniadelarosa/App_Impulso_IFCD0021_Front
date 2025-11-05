import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-users-crud',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crud-usuarios.html'
})
export class CRUDUsuariosComponent implements OnInit {
  form: FormGroup;
  users: User[] = [];
  editMode = false;
  editUserId: number | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<User[]>('http://localhost:8080/api/users')
    .subscribe(data => {
      this.users = data;
    });
  }

  submit() {
    if (this.form.valid) {
      if (this.editMode && this.editUserId !== null) {
        this.http.patch(`http://localhost:8080/api/users/${this.editUserId}`, this.form.value)
          .subscribe(() => {
            this.loadUsers();
            this.resetForm();
          });
      } else {
        this.http.post('http://localhost:8080/api/users/register', this.form.value)
          .subscribe(() => {
            this.loadUsers();
            this.resetForm();
          });
      }
    }
  }

  editUser(user: User) {
    this.editMode = true;
    this.editUserId = user.id;
    this.form.patchValue({
      email: user.email,
      password: user.password
    });
  }

  deleteUser(id: number) {
    this.http.delete(`http://localhost:8080/api/users/${id}`)
      .subscribe(() => {
        this.loadUsers();
      });
  }

  resetForm() {
    this.editMode = false;
    this.editUserId = null;
    this.form.reset();
  }
}
