import { BigObject, userRules } from './data';
import { MyRendererFormRenderer } from './MyRenderer';
import { bindingMode,autoinject, bindable } from "aurelia-framework";
import { validateTrigger, ValidationRules, ValidationController, ValidationControllerFactory } from "aurelia-validation";


@autoinject
export class CustomComponent {

  @bindable({defaultBindingMode: bindingMode.twoWay}) address =  ''
  @bindable({defaultBindingMode: bindingMode.twoWay}) email = ''
}
