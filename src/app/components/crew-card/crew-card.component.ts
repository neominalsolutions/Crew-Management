import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CrewService } from '../../services/crew.service';

@Component({
  selector: 'crew-card',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './crew-card.component.html',
  styleUrl: './crew-card.component.css',
})
export class CrewCard implements OnInit {
  // ActivatedRoute Angularda Aktif olan yönlendirmeyi verir

  crewId: number; // number tipinde ama daha hernaggi bir değer atanmamış demek.

  crew: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crewService: CrewService
  ) {
    this.crewId = activeRoute.snapshot.params['id'] as number;
  }

  ngOnInit(): void {
    this.crewService.getById(this.crewId).subscribe((response) => {
      this.crew = response;
    });
  }
}
