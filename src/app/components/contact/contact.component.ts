import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  serviceId: string = environment.SERVICE_ID;
  templateId: string = environment.TEMPLATE_ID;
  publicKey: string = environment.PUBLIC_KEY;

  email: string = '';

  @ViewChild('successToast')
  successToast!: ElementRef;
  @ViewChild('errorToast')
  errorToast!: ElementRef;

  public sendEmail(form: HTMLFormElement) {
    if (form.checkValidity() && this.email) {
      emailjs
        .sendForm(this.serviceId, this.templateId, form, this.publicKey)
        .then(
          (result: EmailJSResponseStatus) => {
            console.log(result.text);
            form.reset();
            this.showSuccessToast();
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }

  showSuccessToast() {
    if (this.successToast) {
      const successToast = this.successToast.nativeElement;
      successToast.style.display = 'flex';

      setTimeout(() => {
        successToast.style.display = 'none';
      }, 5000);
    }
  }

  showErrorToast() {
    if (this.errorToast) {
      const errorToast = this.errorToast.nativeElement;
      errorToast.style.display = 'flex';

      setTimeout(() => {
        errorToast.style.display = 'none';
      }, 5000);
    }
  }
}
