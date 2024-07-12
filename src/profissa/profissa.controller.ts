import { Controller, Get, Param } from '@nestjs/common';

@Controller('profissa')
export class ProfissaController {
  @Get(':id')
  getProfissa(@Param('id') id: string) {
    return {
      id: id,
      name: 'Gabriel Spontoni',
      rating: 4.8,
      reviews: [
        {
          reviewer: 'João Silva',
          comment:
            'Excelente trabalho! Muito profissional e atento aos detalhes.',
          rating: 5,
        },
        {
          reviewer: 'Maria Oliveira',
          comment:
            'Trabalho bem feito, mas houve um pequeno atraso na entrega.',
          rating: 4,
        },
      ],
      location: {
        address: 'Rua das Construções, 123, São Paulo, SP, 01000-000',
        city: 'São Paulo',
        state: 'SP',
        country: 'Brasil',
        zipCode: '01000-000',
      },
      servicesOffered: [
        'Reforma de casas',
        'Construção de novos projetos',
        'Instalação de pisos e azulejos',
        'Pintura interna e externa',
        'Serviços de encanamento',
        'Serviços elétricos',
      ],
      contact: {
        phone: '(11) 1234-5678',
        email: 'gabriel.spontoni@construtora.com',
      },
      yearsOfExperience: 10,
      certifications: [
        'Certificação em Engenharia Civil',
        'Curso de Gestão de Obras',
      ],
      projects: [
        {
          projectName: 'Residencial Jardim',
          description: 'Construção de um condomínio residencial com 20 casas.',
          year: 2022,
        },
        {
          projectName: 'Edifício Comercial Central',
          description:
            'Reforma completa de um edifício comercial de 10 andares.',
          year: 2020,
        },
      ],
    };
  }
}
