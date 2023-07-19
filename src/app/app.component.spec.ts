import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  beforeEach(async () => {
    component = new AppComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
