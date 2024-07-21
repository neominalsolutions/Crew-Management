import { Component} from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  standalone: true,
  templateUrl: './card.component.html'
})
export class CardComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
      return true;
  }

  onCardButton() {
      alert("Card");
  }

}