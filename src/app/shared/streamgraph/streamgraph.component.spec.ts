import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamgraphComponent } from './streamgraph.component';

describe('StreamgraphComponent', () => {
  let component: StreamgraphComponent;
  let fixture: ComponentFixture<StreamgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
