import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminStartPageComponent } from './components/admin-start-page/admin-start-page.component';
import { UtilsModule } from '../utils/utils.module';
import { NewTrackedObjectComponent } from './components/new-tracked-object/new-tracked-object.component';
import { TrackedObjectsComponent } from './components/tracked-objects/tracked-objects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
} from '@angular/material';
import { FormsComponent } from './components/forms/forms.component';
import { NewFormComponent } from './components/new-form/new-form.component';

const components = [
  AdminStartPageComponent,
  NewTrackedObjectComponent,
  TrackedObjectsComponent,
  FormsComponent,
  NewFormComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    UtilsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: components,
})
export class AdminUserModule {}
