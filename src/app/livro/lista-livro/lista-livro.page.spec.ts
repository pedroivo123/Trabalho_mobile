import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaLivroPage } from './lista-livro.page';

describe('ListaLivroPage', () => {
  let component: ListaLivroPage;
  let fixture: ComponentFixture<ListaLivroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLivroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
