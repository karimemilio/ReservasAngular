import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ServicesComponent } from "./components/services/services.component";
import { NewserviceComponent } from "./components/newservice/newservice.component";

const appRoutes = [
  { path: "*", component: AppComponent, pathMatch: "full" },
  { path: "index", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "services", component: ServicesComponent, pathMatch: "full" },
  { path: "newservice", component: NewserviceComponent, pathMatch: "full" }

];
export const routing = RouterModule.forRoot(appRoutes);