import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlockBuilderLib } from '@org/block-builder-lib';

@Component({
  imports: [RouterModule, BlockBuilderLib],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'weather-app';
}
