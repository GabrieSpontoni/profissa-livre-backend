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
        {
          id: 1,
          serviceName: 'Reforma de casas',
          description: 'Serviços completos de reforma para residências.',
          imageUrl:
            'https://www.casasalea.com/blog/wp-content/uploads/2022/12/Como-fazer-reforma-de-casa.jpg',
        },
        {
          id: 2,
          serviceName: 'Construção de novos projetos',
          description:
            'Planejamento e construção de novos projetos residenciais e comerciais.',
          imageUrl:
            'https://www.bauenconstrutorasp.com.br/uploads/pagina/elemento/campo/2023/11/Hhd7p7EEYJb3LK4J/au-1.jpg',
        },
        {
          id: 3,
          serviceName: 'Instalação de pisos e azulejos',
          description:
            'Instalação profissional de pisos e azulejos para todos os tipos de ambientes.',
          imageUrl:
            'https://blog.chatuba.com.br/wp-content/uploads/2020/01/2020-01-22-ferramentas-para-pisos-saiba-quais-nao-podem-faltar-1-1200x720.jpg',
        },
        {
          id: 4,
          serviceName: 'Pintura interna e externa',
          description:
            'Serviços de pintura de alta qualidade para interiores e exteriores.',
          imageUrl:
            'https://media.gazetadopovo.com.br/2023/04/04140856/16x9-Shutterstock_1974937637-960x540.jpg',
        },
        {
          id: 5,
          serviceName: 'Serviços de encanamento',
          description: 'Soluções completas para problemas de encanamento.',
          imageUrl:
            'https://blog.milium.com.br/wp-content/uploads/2022/01/Hidraulica-conteudo-940x420-copy-1.jpg',
        },
        {
          id: 6,
          serviceName: 'Serviços elétricos',
          description: 'Instalação e manutenção de sistemas elétricos.',
          imageUrl:
            'https://dutotec.com.br/blog/wp-content/uploads/2021/02/manutencao-eletrica.jpg',
        },
      ],
      contact: {
        phone: '(11) 1234-5678',
        email: 'gabriel.spontoni@construtora.com',
      },
      availability: ['Segunda-feira', 'Quarta-feira', 'Sexta-feira'],
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
      bio: 'Gabriel Spontoni é um profissional dedicado com vasta experiência na construção civil. Com mais de 10 anos de experiência, ele se especializa em projetos de reforma e construção, sempre garantindo a satisfação do cliente através de um trabalho de alta qualidade e atenção aos detalhes.',
    };
  }
}
