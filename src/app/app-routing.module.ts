import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DownloadComponent } from './pages/download/download.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomeComponent, title: 'JUANTAP' },
      { path: 'about', component: AboutComponent, title: 'JUANTAP'  },
      { path: 'contact', component: ContactComponent, title: 'JUANTAP'  },
      { path: 'faqs', component: FaqsComponent, title: 'JUANTAP'  },
      { path: 'download', component: DownloadComponent, title: 'JUANTAP'  },
      { path: 'login', component: LoginComponent, title: 'LOGIN | JUANTAP'  },
      { path: 'register', component: RegisterComponent, title: 'REGISTER | JUANTAP'  },
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: HomeComponent, title: 'JUANTAP' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
