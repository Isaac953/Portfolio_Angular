import { Component, OnInit } from '@angular/core';
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJs,
  faAngular,
  faVuejs,
  faReact,
  faGithub,
  faNodeJs,
  faPhp,
  faLaravel,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  /* Start Variables of About me Component */
  title = 'Habilidades';

  skillsCards: any[] = [
    {
      titleCard: 'Frontend',
      iconCard: './assets/icons/frontend_icon.png',
      listCard: [
        { item: 'HTML', fontIcon: faHtml5, iconClass: 'html5' },
        { item: 'CSS', fontIcon: faCss3Alt, iconClass: 'css3' },
        { item: 'Sass', fontIcon: faSass, iconClass: 'sass' },
        { item: 'Bootstrap', fontIcon: faBootstrap, iconClass: 'bootstrap' },
        { item: 'JavaScript', fontIcon: faJs, iconClass: 'javascript' },
        { item: 'Angular', fontIcon: faAngular, iconClass: 'angular' },
        { item: 'VueJS', fontIcon: faVuejs, iconClass: 'vuejs' },
        { item: 'React', fontIcon: faReact, iconClass: 'react' },
        { item: 'Git/GitHub', fontIcon: faGithub, iconClass: 'git' },
      ],
      listClass: 'bottom-yes',
    },
    {
      titleCard: 'Backend',
      iconCard: './assets/icons/backend_icon.png',
      listCard: [
        { item: 'PHP', fontIcon: faPhp, iconClass: 'php' },
        { item: 'Laravel', fontIcon: faLaravel, iconClass: 'laravel' },
        { item: 'Python', logoRoute: './assets/icons/python_icon.png' },
        { item: 'FastAPI', logoRoute: './assets/icons/fastapi_icon.svg' },
        { item: 'Node JS', fontIcon: faNodeJs, iconClass: 'nodejs' },
        { item: 'Express JS', logoRoute: './assets/icons/express_icon.png' },
        { item: 'C#', logoRoute: './assets/icons/csharp_icon.png' },
        { item: '.NET Core', logoRoute: './assets/icons/net_core_icon.png' },
        { item: 'MySQL', logoRoute: './assets/icons/mysql_icon.png' },
        { item: 'PostgreSQL', logoRoute: './assets/icons/postgress_icon.png' },
        { item: 'SQL Server', logoRoute: './assets/icons/sql_server_icon.png' },
      ],
    },
  ];
  /* End Variables of About me Component */

  constructor() {}

  ngOnInit(): void {}
}
