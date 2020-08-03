import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   redirectTo: 'tutorial',
  //   pathMatch: 'full'
  // },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./Pages/login/login.module').then( m => m.LoginPageModule), canActivate :[NologinGuard]
  // },
  {
    path: 'tutorial',
    loadChildren: () => import('./Pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule), canActivate :[AuthGuard]
  },
  {
    path: 'dieta',
    loadChildren: () => import('./Pages/dieta/dieta.module').then( m => m.DietaPageModule)
  },
  {
    path: 'tu-doctor',
    loadChildren: () => import('./Pages/tu-doctor/tu-doctor.module').then( m => m.TuDoctorPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'indice-masa',
    loadChildren: () => import('./Pages/indice-masa/indice-masa.module').then( m => m.IndiceMasaPageModule)
  },
  {
    path: 'peso-ideal',
    loadChildren: () => import('./Pages/peso-ideal/peso-ideal.module').then( m => m.PesoIdealPageModule)
  },

  {
    path: 'calorias',
    loadChildren: () => import('./Pages/calorias/calorias.module').then( m => m.CaloriasPageModule)
  },
  {
    path: 'dietas',
    loadChildren: () => import('./Pages/dietas/dietas.module').then( m => m.DietasPageModule)
  },
  {
    path: 'dietas-modal',
    loadChildren: () => import('./Modals/dietas-modal/dietas-modal.module').then( m => m.DietasModalPageModule)
  },
  {
    path: 'prediagnostico',
    loadChildren: () => import('./Pages/prediagnostico/prediagnostico.module').then( m => m.PrediagnosticoPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./Pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'restablecer-key',
    loadChildren: () => import('./Pages/restablecer-key/restablecer-key.module').then( m => m.RestablecerKeyPageModule)
  },
  {
    path: 'diagnostico',
    loadChildren: () => import('./Pages/diagnostico/diagnostico.module').then( m => m.DiagnosticoPageModule)
  },
  {
    path: 'perfil-doctor',
    loadChildren: () => import('./Pages/perfil-doctor/perfil-doctor.module').then( m => m.PerfilDoctorPageModule)
  },
  {
    path: 'lista-doctores',
    loadChildren: () => import('./Pages/lista-doctores/lista-doctores.module').then( m => m.ListaDoctoresPageModule)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

