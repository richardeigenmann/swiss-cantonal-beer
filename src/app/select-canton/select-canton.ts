import { Component, effect, EventEmitter, inject, Output, signal } from '@angular/core';
import { CantonService } from '../canton-service';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-canton',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './select-canton.html',
  styleUrl: './select-canton.css'
})
export class SelectCanton {
  cantonService = inject(CantonService);
  selectedCantonCode = signal<string>('');
  @Output() cantonChange = new EventEmitter<string>();
  constructor() {
    effect(() => {
      const code = this.selectedCantonCode();
      if (code) {
        this.cantonChange.emit(code);
      }
    });
  }

}