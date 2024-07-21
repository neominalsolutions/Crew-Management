import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  standalone: true,
  templateUrl: './actions.component.html',
})
export class ActionsComponent implements ICellRendererAngularComp {
  private params: any;

  // veri yakalama methodu.
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams) {
    return true;
  }

  onEditButton() {
    console.log('params', this.params.data);
    alert('edit');
  }

  onDeleteButton() {
    alert('Delete');
  }
}
