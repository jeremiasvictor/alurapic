import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoForm } from './photo-form';

describe('PhotoForm', () => {
  let component: PhotoForm;
  let fixture: ComponentFixture<PhotoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
