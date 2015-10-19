import { bootstrap, bind, FORM_PROVIDERS } from 'angular2/angular2';
import { AppComponent } from './components/app/app-component';

bootstrap(AppComponent, [
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
