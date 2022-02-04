import { RenderInstruction, ValidateResult, ValidationRenderer } from "aurelia-validation";

export class MyRendererFormRenderer implements ValidationRenderer {
  render(instruction: RenderInstruction) {
    for (const { result, elements } of instruction.unrender) {
      for (const element of elements) {
        this.remove(element, result);
      }
    }

    for (const { result, elements } of instruction.render) {
      for (const element of elements) {
        this.add(element, result);
      }
    }
  }

  add(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    const formGroup = element.closest('.form-group');
    if (!formGroup) {
      return;
    }

    const message = document.createElement('span');
    message.textContent = result.message;
    message.id = `validation-message-${result.id}`;
    formGroup.appendChild(message);
  }

  remove(element: Element, result: ValidateResult) {
    if (result.valid) {
      return;
    }

    const formGroup = element.closest('.form-group');
    if (!formGroup) {
      return;
    }

    // remove help-block
    const message = formGroup.querySelector(`#validation-message-${result.id}`);
    if (message) {
      formGroup.removeChild(message);
    }
  }
}
