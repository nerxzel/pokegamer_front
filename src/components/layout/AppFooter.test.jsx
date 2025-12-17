import { render, screen } from '@testing-library/react';
import AppFooter from './AppFooter';
import { describe, it, expect } from 'vitest';

describe('AppFooter', () => {
  it('debería mostrar el texto de derechos de autor', () => {
    render(<AppFooter />);
    
    const texto = screen.getByText(/2025 Tienda Pokémon. Todos los derechos reservados/i);
    
    expect(texto).toBeInTheDocument();
  });
});











