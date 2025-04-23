import {Component, Input, Self} from '@angular/core';
import {ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatError, MatFormField, MatLabel} from '@angular/material/form-field';

@Component({
  selector: 'app-text-input',
  imports: [
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    MatError,
    MatLabel,
  ],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent implements ControlValueAccessor {
  @Input() label = ''
  @Input() type = 'text'

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  get control() {
    return this.controlDir.control as FormControl
  }

  protected readonly CSSLayerBlockRule = CSSLayerBlockRule;
}
