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
		),
		new Aptitud(
			"devicon-angularjs-plain",
			"Angular",
		),
		new Aptitud(
			"devicon-apache-plain",
			"Apache",
		),
		new Aptitud(
			"devicon-dot-net-plain",
			"ASP.NET",
		),
		new Aptitud(
			"devicon-css3-plain",
			"CSS3",
		),
		new Aptitud(
			"fa fa-database",
			"Data mining y R",
		),
		new Aptitud(
			"devicon-git-plain",
			"Git",
		),
		new Aptitud(
			"devicon-google-plain",
			"Google Tag Manager",
		),
		new Aptitud(
			"devicon-html5-plain",
			"HTML5",
		),
		new Aptitud(
			"devicon-java-plain",
			"Java",
		),
		new Aptitud(
			"devicon-javascript-plain",
			"JavaScript",
		),
		new Aptitud(
			"devicon-jquery-plain",
			"jQuery",
		),
		new Aptitud(
			"devicon-mysql-plain",
			"MySQL",
		),
		new Aptitud(
			"devicon-nodejs-plain",
			"Node JS",
		),
		new Aptitud(
			"devicon-photoshop-plain",
			"Photoshop",
		),
		new Aptitud(
			"devicon-php-plain",
			"PHP",
		),
		new Aptitud(
			"devicon-python-plain",
			"Python",
		),
		new Aptitud(
			"devicon-react-original",
			"ReactJS",
		),
		new Aptitud(
			"devicon-ruby-plain",
			"Ruby",
		),
		new Aptitud(
			"devicon-rails-plain",
			"Ruby on rails",
		),
		new Aptitud(
			"devicon-sass-plain",
			"Sass",
		),
		new Aptitud(
			"icon-selenium",
			"Selenium"
		),
		new Aptitud(
			"icon-spring",
			"Spring, Struts y Rest",
		),
		new Aptitud(
			"devicon-typescript-plain",
			"TypeScript",
		)
	];

  constructor() { }

  ngOnInit() {  }

}
