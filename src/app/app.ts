import {Component} from '@angular/core'; 

// Core vendor styles
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.css';
import '../../node_modules/animate.css/animate.min.css';

// Main Inspinia CSS files
import '../../src/assets/styles/style.css'; 
import '../../src/assets/sass/import.scss'
 

declare var $:any;

@Component({
    selector   : 'app',
    templateUrl: 'app.template.html',
})

export class AppComponent {
    ngAfterViewInit() {
      
    }

}
