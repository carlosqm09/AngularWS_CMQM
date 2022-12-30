import { WelcomeComponent } from './welcome.component';
import { WelcomeRouteModule } from './welcome.route';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
    imports: [WelcomeRouteModule],
    declarations: [WelcomeComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WelcomeModule {}