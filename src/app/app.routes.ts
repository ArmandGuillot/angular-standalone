import { Routes } from '@angular/router';
import { ObservableComponent } from './components/reactive-module/observable/observable';
import { SubjectComponent } from './components/reactive-module/subject/subject';
import { ComputedComponent } from './components/reactive-module/computed/computed';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AdresseComponent } from './components/routage-module/adresse/adresse';
import { StagiaireComponent } from './components/routage-module/stagiaire/stagiaire';
import { CalculComponent } from './components/routage-module/calcul/calcul';
import { TableauComponent } from './components/routage-module/tableau/tableau';
import { NotFoundComponent } from './components/not-found/not-found';
import { FormulaireSimpleComponent } from './components/formulaire-module/formulaire-simple/formulaire-simple';
import { CalculetteComponent } from './components/formulaire-module/calculette/calculette';
import { FormulaireReactifComponent } from './components/formulaire-module/formulaire-reactif/formulaire-reactif';
import { FormulaireBuilderComponent } from './components/formulaire-module/formulaire-builder/formulaire-builder';
import { CommentComponent } from './components/formulaire-module/comment/comment';
import { FormulaireSignalComponent } from './components/formulaire-module/formulaire-signal/formulaire-signal';
import { PersonneComponent } from './components/personne-module/personne/personne';
import { PereComponent } from './components/interaction-module/pere/pere';
import { PrimeurComponent } from './components/interaction-module/primeur/primeur';
import { ParentComponent } from './components/interaction-module/parent/parent';
import { ClavierComponent } from './components/interaction-module/clavier/clavier';
import { PaysComponent } from './components/interaction-module/pays/pays';
import { ContainerComponent } from './components/interaction-module/container/container';
import { TchatComponent } from './components/interaction-module/tchat/tchat';
import { PersonneDetailsComponent } from './components/personne-module/personne-details/personne-details';
import { AuthComponent } from './components/auth/auth';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'adresse', component: AdresseComponent },
    { path: 'address', redirectTo: '/adresse' },
    { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
    { path: 'observable', component: ObservableComponent },
    { path: 'subject', component: SubjectComponent },
    { path: 'computed', component: ComputedComponent },
    { path: 'calcul/:op', component: CalculComponent },
    { path: 'tableau/:indice', component: TableauComponent },
    { path: 'formulaire', component: FormulaireSimpleComponent },
    { path: 'reactive', component: FormulaireReactifComponent },
    { path: 'builder', component: FormulaireBuilderComponent },
    { path: 'comment', component: CommentComponent },
    { path: 'calculette', component: CalculetteComponent },
    { path: 'signal-form', component: FormulaireSignalComponent },
    { path: 'personne', component: PersonneComponent, canActivate: [authGuard] },
    { path: 'personne/:id', component: PersonneDetailsComponent, canActivate: [authGuard] },
    { path: 'pere', component: PereComponent },
    { path: 'primeur', component: PrimeurComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'clavier', component: ClavierComponent },
    { path: 'pays', component: PaysComponent },
    { path: 'container', component: ContainerComponent },
    { path: 'tchat', component: TchatComponent },
    { path: 'auth', component: AuthComponent },
    //à placer en dernier
    // { path: '**', component: NotFoundComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];
