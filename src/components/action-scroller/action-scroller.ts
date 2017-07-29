import { Component, Renderer, Input } from '@angular/core';
import { TypeBenefitModel } from "../../models/TypeBenefitModel"

@Component({
  selector: 'action-scroller',
  templateUrl: 'action-scroller.html'
})
export class ActionScrollerComponent {

  @Input('typesBenefit') typesBenefit:any;
  selectedTypeBenefit: TypeBenefitModel;

  constructor(public renderer: Renderer) {
  }

  ngOnInit(){
    this.setDefaultTypeFilter();
  }

  setDefaultTypeFilter(){
    var allType = new TypeBenefitModel("Todos");
    this.typesBenefit.unshift(allType);
    this.selectedTypeBenefit = allType;
  }

  selectTypeBenefit(typeBenefit: TypeBenefitModel){
    this.selectedTypeBenefit = typeBenefit;
    this.typesBenefit.shift();
    this.typesBenefit.unshift(this.selectedTypeBenefit);
  }

}
