import { BigObject, userRules } from './data';
import { MyRendererFormRenderer } from './MyRenderer';
import { autoinject } from "aurelia-framework";
import { validateTrigger, ValidationRules, ValidationController, ValidationControllerFactory } from "aurelia-validation";


@autoinject
export class App {

  public data1: BigObject = {
    user:  {
      address: '',
      email: ''
    },
    someOtherField: ''
  }

  public data2: BigObject = {
    user:  {
      address: '',
      email: ''
    },
    someOtherField: ''
  }

  public form1: ValidationController;
  public form2: ValidationController;

  constructor(validationFactory: ValidationControllerFactory) {
    this.form1 = validationFactory.createForCurrentScope();
    this.form1.addRenderer(new MyRendererFormRenderer);
    this.form1.validateTrigger = validateTrigger.changeOrBlur;
    userRules.on(this.data1.user)

    
    this.form2 = validationFactory.createForCurrentScope();
    this.form2.addRenderer(new MyRendererFormRenderer);
    this.form2.validateTrigger = validateTrigger.changeOrBlur;
    userRules.on(this.data2.user)
  }
}
