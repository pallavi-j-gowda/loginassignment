import { NgModule} from "@angular/core";
import { Routes,RouterModule} from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { LoginDetailsComponent } from "./login-details/login-details.component";
const routes:Routes=[
    {path: '',redirectTo:'register',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'loginDetails',component:LoginDetailsComponent},
    
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
  })
  export class AppRoutingModule { }