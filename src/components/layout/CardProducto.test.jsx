import { render, screen, fireEvent } from '@testing-library/react';
import CardProducto from './CardProducto';
import { describe, it, expect, vi } from 'vitest';

const agregarMock = vi.fn(); 

vi.mock('../../hooks/useCart', () => ({
  useCart: () => ({
    addToCart: agregarMock, 
    cart: [] 
  }),
}));

describe('CardProducto', () => {
  const productoFake = {
    id: 1,
    name: 'Pikachu',
    price: 5000,
    img: 'pikachu.jpg',
  };

  it('debería mostrar el nombre y el precio del producto', () => {
    render(<CardProducto product={productoFake} />); 

    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('$5.000')).toBeInTheDocument();

  });

  it('debería llamar a la función de agregar al carrito al hacer click', () => {
    render(<CardProducto product={productoFake} />);


    const boton = screen.getByRole('button'); 

    fireEvent.click(boton);

    expect(agregarMock).toHaveBeenCalled();
    expect(agregarMock).toHaveBeenCalledWith(productoFake); 
  });
});