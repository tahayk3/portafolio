


  return (
    <div style={{ backgroundColor: '#121212', padding: 90}}>
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
          pagination={{ pageSize: 5 }}
          rowKey="id"
        />
      </Card>
    </div>
  );
};

export default Certificates;
