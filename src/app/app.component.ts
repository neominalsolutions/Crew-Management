import { Component, OnInit } from '@angular/core';
import { Route, Router, RouterModule, RouterOutlet } from '@angular/router';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { CardComponent } from './buttons/card.component';
import { ActionsComponent } from './buttons/actions.component';
import { ButtonRendererComponent } from './buttons/button-render.component';
import { CrewService } from './services/crew.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, AgGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  crews: any[] = [];

  constructor(private service: CrewService, private router: Router) {}

  ngOnInit(): void {
    console.log('refresh');
    this.service.getAll().subscribe((response: any) => {
      this.crews = response;
    });
  }

  // edite basınca basılan kayıt ile ilgili sertifikalar popup da çıkacaktır.
  onEdit(event: any) {
    console.log('data', event.rowData);
  }

  onCard(event: any) {
    this.router.navigate(['/crew/', event.rowData.id]);
  }

  onCreate() {
    var First_Name = prompt('First_Name alanını giriniz');
    var Last_Name = prompt('Last_Name alanını giriniz');
    var Nationality = prompt('Nationality alanını giriniz');
    var Title = prompt('Title alanını giriniz');
    var Days_On_Board = prompt('Days_On_Board alanını giriniz');
    var Daily_Rate = prompt('Daily_Rate alanını giriniz');
    var Currency = prompt('Currency alanını giriniz');
    var Total_Income = prompt('Total_Income alanını giriniz');
    var id = this.crews.length + 1;

    var data: any = {
      id,
      First_Name,
      Last_Name,
      Nationality,
      Title,
      Days_On_Board,
      Daily_Rate,
      Currency,
      Total_Income,
    };

    console.log('eklenecek', data);

    this.service.create(data).subscribe((response) => {
      if (response.statusCode == 200) {
        this.crews = [...this.crews, data]; // crew dizisine data ekle demek
      }
    });
  }

  onDelete(event: any) {
    console.log('data', event.rowData);

    this.service // servis delete
      .deleteById(event.rowData.id)
      .subscribe((response: any) => {
        console.log('response', response);
        if (response.statusCode == 200) {
          // arayüzdeki veriyi güncelle.
          this.crews = this.crews.filter((x: any) => x.id !== event.rowData.id);
        }
      });
  }

  colDefs: ColDef[] = [
    {
      headerName: 'Card',
      cellRenderer: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onCard.bind(this),
        label: 'Card',
      },
    },
    {
      headerName: 'Edit',
      cellRenderer: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onEdit.bind(this),
        label: 'Edit',
      },
    },
    {
      headerName: 'Delete',
      cellRenderer: ButtonRendererComponent,
      cellRendererParams: {
        onClick: this.onDelete.bind(this),
        label: 'Delete',
      },
    },
    { field: 'First_Name' },
    { field: 'Last_Name' },
    { field: 'Nationality' },
    { field: 'Title' },
    { field: 'Days_On_Board', flex: 0.8 },
    { field: 'Daily_Rate', flex: 0.8 },
    { field: 'Currency', flex: 0.8 },
    { field: 'Total_Income', flex: 1.5 },
    // { field: "" },
  ];

  onClick() {
    alert('Tıklandı');
  }
}
