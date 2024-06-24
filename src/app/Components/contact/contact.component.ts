import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactServiceService } from '../../Services/contact-service.service';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';
CommonModule
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], 
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  successMessage: string | null = null;

  constructor(private formBuilder: FormBuilder,  private contactService:ContactServiceService,private  router:Router) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
      
  this.getAllMessages();
  }

  get formControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.addMessage(this.contactForm.value).subscribe(
        () => {
          Swal.fire({
            title: 'Success',
            text: 'Message sent successfully!',
            icon: 'success'
          }).then(() => {
            this.router.navigateByUrl('/Home');
          });
        },
        (error) => {
          console.error('Error sending message:', error);
        }
      );
    }
  }

  getAllMessages() {
    this.contactService.getAllMessages().subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}