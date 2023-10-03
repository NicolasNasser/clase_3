import { Component, OnInit } from '@angular/core';
import { personaje } from 'src/interfaces/personaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clase_3';
  firstNumber: number = 0
  state: boolean = true

  resultadoDelPartido: string = "gano"

  personajeSeleccionado: string = ""
  personajeParaMostar: personaje | undefined;

  constructor() {

  }
  ngOnInit(): void {

  }

  personaje: personaje = {
    nombre: "Rick",
    apellido: "Sanchez",
    descripcion: "Científico, genio excéntrico, viaja entre dimensiones con su nieto.",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    alive: false
  }

  personajes: personaje[] = [{
    nombre: "Rick",
    apellido: "Sanchez",
    descripcion: "Científico, genio excéntrico, viaja entre dimensiones con su nieto.",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    alive: true,
  },
  {
    nombre: "Morty",
    apellido: "Smith",
    descripcion: "Adolescente tímido, acompañante de Rick, valiente a pesar de su ansiedad",
    img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    alive: true
  },
  {
    nombre: "Summer",
    apellido: "Smith",
    descripcion: "Hermana mayor, inteligente y pragmática, contrapunto sensata en aventuras.",
    img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    alive: true
  },
  {
    nombre: "Nicolas",
    apellido: "Nasser",
    descripcion: "Profe de folcademy",
    img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    alive: true
  },
  {
    nombre: "sergio",
    apellido: "rios",
    descripcion: "alumno de folcademy",
    img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    alive: true
  }
  ]

  onClick() {
    console.log(this.personajeSeleccionado, "this.personajeSeleccionado")
    this.personajeParaMostar =
      this.personajes.find(personaje => personaje.nombre == this.personajeSeleccionado)
    console.log(this.personajeParaMostar)
  }

}
