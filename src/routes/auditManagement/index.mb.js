import React from 'react';
import AuditManagement from './AuditManagement';
import Layout from '../../components/Layout';

async function action() {
  return {
    title: 'AuditManagement',
    chunks: ['auditManagement_mb'],
    component: (
      <Layout>
        <AuditManagement />
      </Layout>
    ),
  };
}

export default action;
