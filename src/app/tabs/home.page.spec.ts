import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HomesPage } from './home.page';

describe('HomesPage', () => {
  let component: HomesPage;
  let fixture: ComponentFixture<HomesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomesPage],
      providers: [provideRouter([])]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
