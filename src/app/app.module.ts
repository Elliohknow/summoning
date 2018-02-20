import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreaturesComponent } from './creatures/creatures.component';
import { CreatureDetailComponent } from './creature-detail/creature-detail.component';
import { CreatureService } from './creature.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { FiltersComponent } from './filters/filters.component';
import { ActiveCreaturesComponent } from './active-creatures/active-creatures.component';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import { StatBlockComponent } from './stat-block/stat-block.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    CreaturesComponent,
    CreatureDetailComponent,
    MessagesComponent,
    DashboardComponent,
    FiltersComponent,
    ActiveCreaturesComponent,
    StatBlockComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule, MatIconModule,MatToolbarModule, MatMenuModule, MatTabsModule, MatChipsModule,
    MatButtonModule, MatGridListModule, MatInputModule, MatCheckboxModule, MatDividerModule, MatListModule, ScrollDispatchModule,
    MatSelectModule, MatRadioModule, MatSliderModule, MatExpansionModule
  ],
  providers: [
    CreatureService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
