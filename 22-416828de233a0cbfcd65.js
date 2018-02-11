webpackJsonp([22],{688:function(s,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),a.d(n,"sources",function(){return e});var e=[{filename:"component.ts",contents:{raw:a(900),highlighted:a(901)}},{filename:"template.html",contents:{raw:a(902),highlighted:a(903)}},{filename:"module.ts",contents:{raw:a(904),highlighted:a(905)}}]},900:function(s,n){s.exports="import { Component, ChangeDetectionStrategy } from '@angular/core';\nimport {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent\n} from 'angular-calendar';\nimport { Subject } from 'rxjs/Subject';\nimport { addDays, differenceInDays, startOfDay } from 'date-fns';\nimport { colors } from '../demo-utils/colors';\n\n@Component({\n  selector: 'mwl-demo-component',\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: 'template.html'\n})\nexport class DemoComponent {\n  view: string = 'month';\n\n  viewDate: Date = new Date();\n\n  externalEvents: CalendarEvent[] = [\n    {\n      title: 'Event 1',\n      color: colors.yellow,\n      start: new Date(),\n      draggable: true\n    },\n    {\n      title: 'Event 2',\n      color: colors.blue,\n      start: new Date(),\n      draggable: true\n    }\n  ];\n\n  events: CalendarEvent[] = [];\n\n  activeDayIsOpen: boolean = false;\n\n  refresh: Subject<any> = new Subject();\n\n  eventDropped({\n    event,\n    newStart,\n    newEnd\n  }: CalendarEventTimesChangedEvent): void {\n    const externalIndex: number = this.externalEvents.indexOf(event);\n    if (externalIndex > -1) {\n      this.externalEvents.splice(externalIndex, 1);\n      this.events.push(event);\n    }\n    event.start = newStart;\n    if (newEnd) {\n      event.end = newEnd;\n    }\n    this.viewDate = newStart;\n    this.activeDayIsOpen = true;\n  }\n}\n"},901:function(s,n){s.exports='<span class="hljs-keyword">import</span> { Component, ChangeDetectionStrategy } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> {\n  CalendarEvent,\n  CalendarEventTimesChangedEvent\n} from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { Subject } from <span class="hljs-string">\'rxjs/Subject\'</span>;\n<span class="hljs-keyword">import</span> { addDays, differenceInDays, startOfDay } from <span class="hljs-string">\'date-fns\'</span>;\n<span class="hljs-keyword">import</span> { colors } from <span class="hljs-string">\'../demo-utils/colors\'</span>;\n\n@Component({\n  selector: <span class="hljs-string">\'mwl-demo-component\'</span>,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  templateUrl: <span class="hljs-string">\'template.html\'</span>\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoComponent {\n  view: <span class="hljs-built_in">string</span> = <span class="hljs-string">\'month\'</span>;\n\n  viewDate: <span class="hljs-built_in">Date</span> = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>();\n\n  externalEvents: CalendarEvent[] = [\n    {\n      title: <span class="hljs-string">\'Event 1\'</span>,\n      color: colors.yellow,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      draggable: <span class="hljs-literal">true</span>\n    },\n    {\n      title: <span class="hljs-string">\'Event 2\'</span>,\n      color: colors.blue,\n      start: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),\n      draggable: <span class="hljs-literal">true</span>\n    }\n  ];\n\n  events: CalendarEvent[] = [];\n\n  activeDayIsOpen: <span class="hljs-built_in">boolean</span> = <span class="hljs-literal">false</span>;\n\n  refresh: Subject&lt;<span class="hljs-built_in">any</span>&gt; = <span class="hljs-keyword">new</span> Subject();\n\n  eventDropped({\n    event,\n    newStart,\n    newEnd\n  }: CalendarEventTimesChangedEvent): <span class="hljs-built_in">void</span> {\n    <span class="hljs-keyword">const</span> externalIndex: <span class="hljs-built_in">number</span> = <span class="hljs-keyword">this</span>.externalEvents.indexOf(event);\n    <span class="hljs-keyword">if</span> (externalIndex &gt; -<span class="hljs-number">1</span>) {\n      <span class="hljs-keyword">this</span>.externalEvents.splice(externalIndex, <span class="hljs-number">1</span>);\n      <span class="hljs-keyword">this</span>.events.push(event);\n    }\n    event.start = newStart;\n    <span class="hljs-keyword">if</span> (newEnd) {\n      event.end = newEnd;\n    }\n    <span class="hljs-keyword">this</span>.viewDate = newStart;\n    <span class="hljs-keyword">this</span>.activeDayIsOpen = <span class="hljs-literal">true</span>;\n  }\n}\n'},902:function(s,n){s.exports='<div class="row">\n\n  <div class="col-md-3">\n    <div class="card">\n      <div class="card-body">\n        <ul>\n          <li\n            *ngFor="let event of externalEvents"\n            mwlDraggable\n            [dropData]="{event: event}"\n            style="position:relative; z-index: 10">\n            <a\n              href="javascript:;"\n              [style.color]="event.color.primary">\n              {{ event.title }}\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class="col-md-9">\n    <mwl-demo-utils-calendar-header\n      [(view)]="view"\n      [(viewDate)]="viewDate">\n    </mwl-demo-utils-calendar-header>\n\n    <div [ngSwitch]="view">\n      <mwl-calendar-month-view\n        *ngSwitchCase="\'month\'"\n        [viewDate]="viewDate"\n        [events]="events"\n        [activeDayIsOpen]="activeDayIsOpen"\n        [refresh]="refresh"\n        (eventTimesChanged)="eventDropped($event)">\n      </mwl-calendar-month-view>\n      <mwl-calendar-week-view\n        *ngSwitchCase="\'week\'"\n        [viewDate]="viewDate"\n        [events]="events"\n        [refresh]="refresh"\n        (eventTimesChanged)="eventDropped($event)">\n      </mwl-calendar-week-view>\n      <mwl-calendar-day-view\n        *ngSwitchCase="\'day\'"\n        [viewDate]="viewDate"\n        [events]="events"\n        [refresh]="refresh"\n        (eventTimesChanged)="eventDropped($event)">\n      </mwl-calendar-day-view>\n    </div>\n  </div>\n\n</div>'},903:function(s,n){s.exports='<span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"row"</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"col-md-3"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"card"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"card-body"</span>&gt;</span>\n        <span class="hljs-tag">&lt;<span class="hljs-title">ul</span>&gt;</span>\n          <span class="hljs-tag">&lt;<span class="hljs-title">li</span>\n            *<span class="hljs-attribute">ngFor</span>=<span class="hljs-value">"let event of externalEvents"</span>\n            <span class="hljs-attribute">mwlDraggable</span>\n            [<span class="hljs-attribute">dropData</span>]=<span class="hljs-value">"{event: event}"</span>\n            <span class="hljs-attribute">style</span>=<span class="hljs-value">"position:relative; z-index: 10"</span>&gt;</span>\n            <span class="hljs-tag">&lt;<span class="hljs-title">a</span>\n              <span class="hljs-attribute">href</span>=<span class="hljs-value">"javascript:;"</span>\n              [<span class="hljs-attribute">style.color</span>]=<span class="hljs-value">"event.color.primary"</span>&gt;</span>\n              {{ event.title }}\n            <span class="hljs-tag">&lt;/<span class="hljs-title">a</span>&gt;</span>\n          <span class="hljs-tag">&lt;/<span class="hljs-title">li</span>&gt;</span>\n        <span class="hljs-tag">&lt;/<span class="hljs-title">ul</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n\n  <span class="hljs-tag">&lt;<span class="hljs-title">div</span> <span class="hljs-attribute">class</span>=<span class="hljs-value">"col-md-9"</span>&gt;</span>\n    <span class="hljs-tag">&lt;<span class="hljs-title">mwl-demo-utils-calendar-header</span>\n      [(<span class="hljs-attribute">view</span>)]=<span class="hljs-value">"view"</span>\n      [(<span class="hljs-attribute">viewDate</span>)]=<span class="hljs-value">"viewDate"</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-demo-utils-calendar-header</span>&gt;</span>\n\n    <span class="hljs-tag">&lt;<span class="hljs-title">div</span> [<span class="hljs-attribute">ngSwitch</span>]=<span class="hljs-value">"view"</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-month-view</span>\n        *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'month\'"</span>\n        [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n        [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n        [<span class="hljs-attribute">activeDayIsOpen</span>]=<span class="hljs-value">"activeDayIsOpen"</span>\n        [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n        (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventDropped($event)"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-month-view</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-week-view</span>\n        *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'week\'"</span>\n        [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n        [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n        [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n        (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventDropped($event)"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-week-view</span>&gt;</span>\n      <span class="hljs-tag">&lt;<span class="hljs-title">mwl-calendar-day-view</span>\n        *<span class="hljs-attribute">ngSwitchCase</span>=<span class="hljs-value">"\'day\'"</span>\n        [<span class="hljs-attribute">viewDate</span>]=<span class="hljs-value">"viewDate"</span>\n        [<span class="hljs-attribute">events</span>]=<span class="hljs-value">"events"</span>\n        [<span class="hljs-attribute">refresh</span>]=<span class="hljs-value">"refresh"</span>\n        (<span class="hljs-attribute">eventTimesChanged</span>)=<span class="hljs-value">"eventDropped($event)"</span>&gt;</span>\n      <span class="hljs-tag">&lt;/<span class="hljs-title">mwl-calendar-day-view</span>&gt;</span>\n    <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n  <span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>\n\n<span class="hljs-tag">&lt;/<span class="hljs-title">div</span>&gt;</span>'},904:function(s,n){s.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\nimport { CalendarModule } from 'angular-calendar';\nimport { DragAndDropModule } from 'angular-draggable-droppable';\nimport { DemoUtilsModule } from '../demo-utils/module';\nimport { DemoComponent } from './component';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DragAndDropModule,\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: '', component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\nexport class DemoModule {}\n"},905:function(s,n){s.exports='<span class="hljs-keyword">import</span> { NgModule } from <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } from <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { RouterModule } from <span class="hljs-string">\'@angular/router\'</span>;\n<span class="hljs-keyword">import</span> { CalendarModule } from <span class="hljs-string">\'angular-calendar\'</span>;\n<span class="hljs-keyword">import</span> { DragAndDropModule } from <span class="hljs-string">\'angular-draggable-droppable\'</span>;\n<span class="hljs-keyword">import</span> { DemoUtilsModule } from <span class="hljs-string">\'../demo-utils/module\'</span>;\n<span class="hljs-keyword">import</span> { DemoComponent } from <span class="hljs-string">\'./component\'</span>;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    CalendarModule.forRoot(),\n    DragAndDropModule,\n    DemoUtilsModule,\n    RouterModule.forChild([{ path: <span class="hljs-string">\'\'</span>, component: DemoComponent }])\n  ],\n  declarations: [DemoComponent],\n  exports: [DemoComponent]\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> DemoModule {}\n'}});
//# sourceMappingURL=22-416828de233a0cbfcd65.js.map