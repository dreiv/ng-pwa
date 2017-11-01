import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<h1>Hello World!</h1>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
