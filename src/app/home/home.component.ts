import { Component } from '@angular/core';

import { AppState } from '../app.service';
import { Title } from './title';
// import { XLarge } from './x-large';
import { VotingLocationService } from './voting-locations.service';
import{SeniorLocationService} from './senior-locations.service';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent {




  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title,
              private votingLocationService: VotingLocationService,
              private seniorLocationService:SeniorLocationService){
  }

  titleName: string = 'My first angular2-google-maps project';
  lng: number = -76.73637679719799;
  lat: number = 39.20133653119792;


  public loadedData: any;
  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
    this.seniorLocationService.getData().subscribe(data => this.loadedData = data);
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
