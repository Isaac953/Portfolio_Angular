import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faFilePdf, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  /* Start Variables of Contact Component */
  title = 'Contacto';

  description =
    '¿Quieres que transforme tus ideas en productos para dar soluciones a problemas especificos? Contactame en mis redes sociales para mayor información.';

  subDescription = 'Puedes encontrarme en:';

  contacts: any[] = [
    // {
    //   socialMedia: 'Email',
    //   url: 'mailto:isaac.arias07@gmail.com',
    //   icon: faEnvelope,
    // },
    {
      socialMedia: 'LinkedIn',
      url: 'https://www.linkedin.com/in/isaac-arias-6884a2149/',
      icon: faLinkedin,
    },
    {
      socialMedia: 'GitHub',
      url: 'https://github.com/Isaac953',
      icon: faGithub,
    },
    // {
    //   socialMedia: 'Twitter',
    //   url: 'https://twitter.com/Sak_Dark07',
    //   icon: faTwitter,
    // },
    // {
    //   socialMedia: 'Instagram',
    //   url: 'https://www.instagram.com/isaac_arias_7/',
    //   icon: faInstagram,
    // },
    // {
    //   socialMedia: 'CV',
    //   url: './assets/docs/Isaac-Arias_CV.pdf',
    //   icon: faFilePdf,
    // },
  ];
  /* End Variables of Contact Component */

  constructor() {}

  ngOnInit(): void {}
}
