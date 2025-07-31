import React, { useEffect, useState } from 'react';
import { Card, Table, Button } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const fetchCertificates = async () => {
  return [
    { id: 1, title: 'Curso Spring AI Integra una aplicación con OpenAI', date: '2025-07-28', url: 'https://app.aluracursos.com/certificate/tahayk3/gpt-java-integra-aplicacion-openai' },
    { id: 2, title: 'Curso ChatGPT y programación aumenta tu productividad', date: '2025-07-24', url: 'https://app.aluracursos.com/certificate/tahayk3/chatgpt-programacion-aumenta-productividad' },
    { id: 3, title: 'Curso Practicando Spring Framework Challenge Foro Hub', date: '2025-07-22', url: 'https://app.aluracursos.com/certificate/tahayk3/spring-framework-challenge-foro-hub' },
    { id: 4, title: 'Curso Spring Boot 3 documentar, probar y preparar una API para su implementación', date: '2025-07-21', url: 'https://app.aluracursos.com/certificate/tahayk3/spring-boot-3-documentar-probar-preparar-api-implementacion' },
    { id: 5, title: 'Curso Spring Boot 3 aplique las mejores prácticas y proteja una API Rest', date: '2025-07-16', url: 'https://app.aluracursos.com/certificate/tahayk3/spring-boot-3-aplique-mejores-practicas-proteja-api-rest' },
    { id: 6, title: 'Curso Spring Boot 3 desarrolla una API REST en Java', date: '2025-07-10', url: 'https://app.aluracursos.com/certificate/tahayk3/spring-boot-3-dessarrola-api-rest-java' },
    { id: 7, title: 'Curso Practicando Spring Boot Challenge Literalura', date: '2025-07-02', url: 'https://app.aluracursos.com/certificate/tahayk3/challenge-spring-boot-literalura' },
    { id: 8, title: 'Curso Java creando tu primera API y conectándola al Front End', date: '2025-07-01', url: 'https://app.aluracursos.com/certificate/tahayk3/java-api-conectandola-front-end' },
    { id: 9, title: 'Curso Java persistencia de datos y consultas con Spring Data JPA', date: '2025-06-25', url: 'https://app.aluracursos.com/certificate/tahayk3/java-persistencia-datos-consultas-spring-data-jpa' },
    { id: 10, title: 'Curso Java trabajando con lambdas, streams y Spring Framework', date: '2025-06-10', url: 'https://app.aluracursos.com/certificate/tahayk3/java-trabajando-lambdas-streams-spring-framework' },
    { id: 11, title: 'Curso Practicando con Java Challenge Conversor de Monedas', date: '2025-05-26', url: 'https://app.aluracursos.com/certificate/tahayk3/practicando-java-con-conversor-de-moneda' },
    { id: 12, title: 'Curso Java consumir API, escribir archivos y manejar errores', date: '2025-05-22', url: 'https://app.aluracursos.com/certificate/tahayk3/java-consumir-api-escribir-archivos-manejar-errores' },
    { id: 13, title: 'Curso Java trabajar con listas y colecciones de datos', date: '2025-05-14', url: 'https://app.aluracursos.com/certificate/tahayk3/java-trabajar-listas-colecciones-datos' },
    { id: 14, title: 'Curso Practicando Java condicionales con if_else', date: '2025-05-06', url: 'https://app.aluracursos.com/certificate/tahayk3/practicando-java-condicionales-if-else' },
    { id: 15, title: 'Curso Java aplicando la Orientación a Objetos', date: '2025-05-05', url: 'https://app.aluracursos.com/certificate/tahayk3/java-aplicando-orientacion-objetos' },
    { id: 16, title: 'Curso Java creando tu primera aplicación', date: '2025-04-29', url: 'https://app.aluracursos.com/certificate/tahayk3/java-creando-primera-aplicacion' },
    { id: 17, title: 'Curso Emprendimiento De la idea al plan de negocios', date: '2025-04-28', url: 'https://app.aluracursos.com/certificate/tahayk3/emprendimiento-idea-plan-negocios' },
    { id: 18, title: 'Curso Fundamentos de Agilidad Primeros pasos para la transformación ágil ', date: '2025-04-26', url: 'https://app.aluracursos.com/certificate/tahayk3/fundamentos-agilidad-primeros-pasos-transformacion-agil' },
    { id: 19, title: 'Curso Transición de carrera una guía al campo de tecnología', date: '2025-04-23', url: 'https://app.aluracursos.com/certificate/tahayk3/transicion-carrera-guia-campo-tecnologia' },
    { id: 20, title: 'Curso Propósito profesional ser el protagonista de tu carrera', date: '2025-04-23', url: 'https://app.aluracursos.com/certificate/tahayk3/proposito-profesional-protagonista-carrera' },
    { id: 21, title: 'Curso Desarrollo de carrera demanda del mercado', date: '2025-03-24', url: 'https://app.aluracursos.com/certificate/tahayk3/desarrollo-carrera-demanda-mercado' },
    { id: 22, title: 'Curso HTML y CSS_ trabajando con responsividad y publicación de proyectos', date: '2025-03-03', url: 'https://app.aluracursos.com/certificate/tahayk3/html-css-trabajando-responsividad-publicacion-proyectos' },
    { id: 23, title: 'Curso HTML y CSS: header, footer y variables CSS', date: '2025-03-03', url: 'https://app.aluracursos.com/certificate/tahayk3/html-css-header-footer-variables-css' },
    { id: 24, title: 'Curso HTML y CSS Clases, Posicionamiento y Flexbox', date: '2025-03-03', url: 'https://app.aluracursos.com/certificate/tahayk3/html-css-clases-posicionamiento-flexbox' },
    { id: 25, title: 'Curso HTML y CSS ambientes de desarrollo, estructura de archivos y tags', date: '2025-03-01', url: 'https://app.aluracursos.com/certificate/tahayk3/html-css-desarrollo-estructura-archivos-tags' },
    { id: 26, title: 'Curso ChatGPT optimizando la calidad de los resultados', date: '2025-02-27', url: 'https://app.aluracursos.com/certificate/tahayk3/chatgpt-optimizando-calidad-resultados' },
    { id: 27, title: 'Curso Practicando Lógica de Programación_ Challenge Amigo secreto', date: '2025-02-26', url: 'https://app.aluracursos.com/certificate/tahayk3/logica-programacion-challenge-amigo-secreto' },
    { id: 28, title: 'Curso Git y GitHub repositorio, commit y versiones', date: '2025-02-25', url: 'https://app.aluracursos.com/certificate/tahayk3/git-github-repositorio-commit-versiones' },
    { id: 29, title: 'Curso Lógica de programación: explorar funciones y listas', date: '2025-02-24', url: 'https://app.aluracursos.com/certificate/tahayk3/logica-programacion-explorar-funciones-listas' },
    { id: 30, title: 'Curso Lógica de programación sumérgete en la programación con JavaScript', date: '2025-02-03', url: 'https://app.aluracursos.com/certificate/tahayk3/logica-programacion-sumergete-programacion-javascript' },
    { id: 31, title: 'Curso Ser productivo para cumplir sus metas personales', date: '2025-02-21', url: 'https://app.aluracursos.com/certificate/tahayk3/habitos-productivo-metas-personales' },
    { id: 32, title: 'Curso Foco Enfocarse trae más resultados para el día a día', date: '2025-02-20', url: 'https://app.aluracursos.com/certificate/tahayk3/habitos-productivo-metas-personales' },
    { id: 33, title: 'Curso LinkedIn Como hacer que tu perfil trabaje por ti', date: '2025-02-19', url: 'https://app.aluracursos.com/certificate/tahayk3/linkedin-hacer-perfil-trabaje-por-ti' },
    { id: 34, title: 'Curso Aprender a aprender tecnicas para tu autodesarrollo', date: '2025-02-17', url: 'https://app.aluracursos.com/certificate/tahayk3/aprender-a-aprender-tecnicas-autodesarrollo' },
    { id: 35, title: 'Ciencia de datos por python edutek latam', date: '2024-11-23', url: 'https://firebasestorage.googleapis.com/v0/b/mueblesxela-d948d.appspot.com/o/uploads%2FDCDPEL-2024-.pdf?alt=media&token=d1aabbdf-07bc-4998-91bd-791e734f2025' },
    { id: 36, title: 'Curso de Fundamentos de Angular', date: '2023-03-06', url: 'https://platzi.com/p/tahayk3/curso/2478-course/diploma/detalle/' },
  ];
};

const Certificates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCertificates().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', render: (text) => <span>{text}</span> },
    { title: 'Título', dataIndex: 'title', key: 'title', render: (text) => <span>{text}</span> },
    {
      title: 'Fecha',
      dataIndex: 'date',
      key: 'date',
      render: (value) => <span>{new Date(value).toLocaleDateString()}</span>,
    },
    {
      title: 'Link',
      dataIndex: 'url',
      key: 'url',
      render: (url) => (
      <Button
        icon={<BookOutlined />}
        style={{
          backgroundColor: '#333',
          borderColor: '#555',
          color: '#eee',
        }}
        onClick={() => window.open(url, '_blank')}
      >
        Ver
      </Button>
    ),
  },
  ];




  return (
    <div style={{ backgroundColor: '#121212', padding: 20, paddingBottom: 100 }}>
      <style>{`
        /* Tabla fondo oscuro */
        .dark-table .ant-table {
          background: #1e1e1e !important;
          color: #eee;
        }
        .dark-table .ant-table-thead > tr > th {
          background: #2a2a2a;
          color: #ccc;
          border-bottom: 1px solid #444;
        }
        .dark-table .ant-table-tbody > tr > td {
          background: #1e1e1e;
          color: #eee;
          border-bottom: 1px solid rgb(88, 88, 228);
        }
        .dark-table .ant-pagination-item {
          background: #fff !important;
          border-color: #444 !important;
          color: #ccc !important;
        }
        .dark-table .ant-pagination-item-active {
          background: #000 !important;
        }

        .dark-table .ant-pagination-item-active a {
          color: #fff !important; /* blanco para el número */
        }

        .dark-table .ant-pagination-prev, .dark-table .ant-pagination-next {
          color: #fff !important;
        }
  
        .dark-table .ant-table-tbody > tr.ant-table-row:hover > td {
          background: #333 !important;  /* fondo más claro */
          color: #fff !important;       /* texto blanco */
        }

        .dark-table .ant-pagination-prev .ant-pagination-item-link,
        .dark-table .ant-pagination-next .ant-pagination-item-link {
          color: #fff !important; /* flechas en blanco */
        }
        }
      `}</style>

      <h1 style={{ color: '#eee' }}>Certificados / Cursos</h1>
      <Card
        bodyStyle={{ padding: 0, backgroundColor: '#1e1e1e' }}
        loading={loading}
        style={{ borderColor: '#333' }}
        className="dark-table"
      >
        <Table
          size="small"
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 10 }}
          rowKey="id"
        />
      </Card>
    </div>
  );
};

export default Certificates;
