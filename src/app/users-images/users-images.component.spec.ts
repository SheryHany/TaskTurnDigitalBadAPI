import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersImagesComponent } from './users-images.component';

describe('UsersImagesComponent', () => {
  let component: UsersImagesComponent;
  let fixture: ComponentFixture<UsersImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
