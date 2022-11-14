import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loading = false;

  signinForm = this.formBuilder.group({
    email: ''
  });

  constructor(private readonly auth: AuthService, private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    try {
      this.loading = true
      const email = this.signinForm.value.email as string
      const { error } = await this.auth.signIn(email)
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      }
    } finally {
      this.signinForm.reset()
      this.loading = false
    }
  }
}
