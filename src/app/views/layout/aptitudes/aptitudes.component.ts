import { Component, OnInit } from '@angular/core';
import { Aptitud } from '../../../models/aptitud';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.scss', '../../../../assets/styles/font-mfizz.css', '../../../../assets/styles/fontawesome-all.css',  '../../../../assets/styles/devicon.min.css']
})

export class AptitudesComponent implements OnInit {

	nombreSeccion:string = "Aptitudes";
	
	aptitudes : Aptitud[] = [
		new Aptitud(
			"devicon-android-plain",
			"Android",
			"icon"
		),
		new Aptitud(
			"devicon-angularjs-plain",
			"Angular",
			"icon"
		),
		new Aptitud(
			"devicon-apache-plain",
			"Apache",
			"icon"
		),
		new Aptitud(
			"devicon-dot-net-plain",
			"ASP.NET",
			"icon"
		),
		new Aptitud(
			"devicon-css3-plain",
			"CSS3",
			"icon"
		),
		new Aptitud(
			"fa fa-database",
			"Data mining y R",
			"icon"
		),
		new Aptitud(
			"devicon-git-plain",
			"Git",
			"icon"
		),
		new Aptitud(
			"devicon-google-plain",
			"Google Tag Manager",
			"icon"
		),
		new Aptitud(
			"devicon-html5-plain",
			"HTML5",
			"icon"
		),
		new Aptitud(
			"devicon-java-plain",
			"Java",
			"icon"
		),
		new Aptitud(
			"devicon-javascript-plain",
			"JavaScript",
			"icon"
		),
		new Aptitud(
			"devicon-jquery-plain",
			"jQuery",
			"icon"
		),
		new Aptitud(
			"devicon-mysql-plain",
			"MySQL",
			"icon"
		),
		new Aptitud(
			"devicon-nodejs-plain",
			"Node JS",
			"icon"
		),
		new Aptitud(
			"devicon-photoshop-plain",
			"Photoshop",
			"icon"
		),
		new Aptitud(
			"devicon-php-plain",
			"PHP",
			"icon"
		),
		new Aptitud(
			"devicon-python-plain",
			"Python",
			"icon"
		),
		new Aptitud(
			"devicon-react-original",
			"ReactJS",
			"icon"
		),
		new Aptitud(
			"devicon-ruby-plain",
			"Ruby",
			"icon"
		),
		new Aptitud(
			"devicon-rails-plain",
			"Ruby on rails",
			"icon"
		),
		new Aptitud(
			"devicon-sass-plain",
			"Sass",
			"icon"
		),
		new Aptitud(
			"icon-selenium",
			"Selenium",
			"icon"
		),
		new Aptitud(
			"icon-spring",
			"Spring, Struts y Rest",
			"icon"
		),
		new Aptitud(
			"devicon-typescript-plain",
			"TypeScript",
			"icon"
		)
	];

  constructor() { }

  ngOnInit() {  }

}
