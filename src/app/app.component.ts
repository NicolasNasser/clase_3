import { Component, OnInit } from '@angular/core';
import { personaje } from 'src/interfaces/personaje';
import { PersonajesService } from './services/personajes.service';


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
  personajeParaMostar: any;
  personajes: any[] = [
  ]

  constructor(private _PService: PersonajesService) {

  }
  ngOnInit(): void {
    this._PService.getPersonajes().subscribe({
      next: (data: any) => {
        this.personajes = data.results
      },
      error: (err) => { console.log(err, "Hola mundo soy el error") },
      complete: () => { console.log("completado") },
    })
  }

  personaje: personaje = {
    nombre: "Rick",
    apellido: "Sanchez",
    descripcion: "Científico, genio excéntrico, viaja entre dimensiones con su nieto.",
    img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    alive: false
  }



  onClick() {
    // console.log(this.personajeSeleccionado, "this.personajeSeleccionado")
    // this.personajeParaMostar =
    //   this.personajes.find(personaje => personaje.id == this.personajeSeleccionado)
    // console.log(this.personajeParaMostar)

    this._PService.getUnPersonajes(this.personajeSeleccionado).subscribe({
      next: (data: any) => { this.personajeParaMostar = data },
      error: (err) => { console.log(err) },
      complete: () => { console.log("completado") }
    })
  }


  ejecutarSaludo(personaje: any) {
    console.log("hola soy" + " " + personaje.name)
    console.log(personaje)
  }

}
