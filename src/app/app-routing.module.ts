import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ServicesComponent } from "./components/services/services.component";
import { NewserviceComponent } from "./components/newservice/newservice.component";
import { AuthGuard } from "./services/guard/authguard.service";
import { EditServiceComponent } from "./components/editService/editService.component";
import { EditUserComponent } from "./components/editUser/editUser.component";


const appRoutes = [
  { path: "*", component: AppComponent, pathMatch: "full" },
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "index", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "services", component: ServicesComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "newservice", component: NewserviceComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "editservice/:id", component: EditServiceComponent, pathMatch: "full", canActivate: [AuthGuard] },
  { path: "edituser", component: EditUserComponent, pathMatch: "full", canActivate: [AuthGuard] }


];
export const routing = RouterModule.forRoot(appRoutes);