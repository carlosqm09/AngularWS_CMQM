import { LoginComponent } from './login.component';
import { LoginRouteModule } from './login.route';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

@NgModule({
    imports: [LoginRouteModule],
    declarations: [LoginComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule {}