import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotosComponent } from './photos.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PhotosService } from '../../services/photos.service';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('PhotoListComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let photoService: PhotosService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ PhotosService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    photoService = TestBed.inject(PhotosService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch and display 100 photos', () => {
    const dummyPhotos = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      title: `Test Photo ${i + 1}`,
      thumbnailUrl: `https://via.placeholder.com/150/${i + 1}`
    }));

    spyOn(photoService, 'getPhotos').and.returnValue(of(dummyPhotos));

    fixture.detectChanges();

    expect(component.photos.length).toBe(100);
    expect(component.photos).toEqual(dummyPhotos);

    const compiled: DebugElement = fixture.debugElement;
    const photoItems = compiled.queryAll(By.css('.photo-item'));
    expect(photoItems.length).toBe(100);

    const firstPhotoTitle = compiled.query(By.css('.photo-item p')).nativeElement.textContent;
    expect(firstPhotoTitle).toContain('Test Photo 1');
  });
});
