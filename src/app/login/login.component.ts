import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  
  constructor(private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }
  onSignIn(): void {


    this.dialogRef.close();
  }

}


