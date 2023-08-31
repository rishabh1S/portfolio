import { Component } from '@angular/core';
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

  public sendEmail(form: HTMLFormElement) {
    emailjs
      .sendForm(this.serviceId, this.templateId, form, this.publicKey)
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          form.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
