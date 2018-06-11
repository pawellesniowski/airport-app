import {AppComponent} from './app.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('Appcomponetn', () => {
  let fixture: ComponentFixture<AppComponent>;
  let instance: AppComponent ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    instance = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(true).toBe(true);
  });

  it('should be correct title', () => {
    console.log(instance);
    console.log(fixture);
    expect(instance.title).toBe('Passengers List');
  });




});
