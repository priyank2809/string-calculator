import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StringCalculatorService } from './string-calculator.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule],
      providers: [StringCalculatorService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'String Calculator' title`, () => {
    expect(component.title).toEqual('String Calculator');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('String Calculator');
  });

  it('should calculate the sum correctly', () => {
    component.input = '1,2,3';
    component.calculate();
    expect(component.result).toBe(6);
  });
  
  it('should display an error for negative numbers', () => {
    component.input = '-1,2,-3';
    component.calculate();
    expect(component.error).toContain('Negative numbers not allowed');
  });
});
