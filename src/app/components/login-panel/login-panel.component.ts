import { Component } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-login-panel',
  standalone: true,
  imports: [SharedModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login-panel.component.html',
  styleUrl: './login-panel.component.scss'
})
export class LoginPanelComponent {

  value = '';
}
