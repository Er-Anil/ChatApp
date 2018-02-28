import { Component, style } from '@angular/core';
import { MessageService } from './messages/message.service';
// import { Message } from "./messages/message.model";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {
//     messages: Message[] = [
//         new Message('Some message', 'Anil'),
//         new Message('Something else', 'Anil'),
//         new Message('3rd message', 'Anil')
// ];
    
}