import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppShellComponent } from './components/app-shell/app-shell.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./auth/signup/signup.module').then((m) => m.SignupModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./auth/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordModule
      ),
  },
  {
    path: '',
    component: AppShellComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'authors', loadChildren: () => import('./pages/author/author.module').then(m => m.AuthorModule) },
      { path: 'books', loadChildren: () => import('./pages/books/books.module').then(m => m.BooksModule) },
      { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
      { path: 'student', loadChildren: () => import('./pages/student/student.module').then((m) => m.StudentModule), },
      { path: 'issue-book-dashboard', loadChildren: () => import('./pages/issue-book-dashboard/issue-book-dashboard.module').then(m => m.IssueBookDashboardModule) },
      { path: 'materials', loadChildren: () => import('./pages/materials/materials.module').then(m => m.MaterialsModule) },
      { path: 'promote-students', loadChildren: () => import('./pages/promote-students/promote-students.module').then(m => m.PromoteStudentsModule) },
    ],
  },
  {
    path: '**',
    redirectTo: '/books',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
