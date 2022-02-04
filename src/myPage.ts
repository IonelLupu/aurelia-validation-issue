import { BigObject, userRules } from './data';
import { MyRendererFormRenderer } from './MyRenderer';
import { autoinject } from "aurelia-framework";
import { validateTrigger, ValidationRules, ValidationController, ValidationControllerFactory } from "aurelia-validation";


@autoinject
export class MyPage {

  public data: BigObject = {
    user:  {
      address: '',
      email: ''
    },
    someOtherField: ''
  }

  public form: ValidationController;

  constructor(validationFactory: ValidationControllerFactory) {
    this.form = validationFactory.createForCurrentScope();
    this.form.addRenderer(new MyRendererFormRenderer);
    this.form.validateTrigger = validateTrigger.changeOrBlur;
    userRules.on(this.data.user)

    this.form.validate().then(() => {
      this.form.reset();
    });
  }
}
