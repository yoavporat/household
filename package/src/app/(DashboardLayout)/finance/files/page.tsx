'use client';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import ProductPerformance from '../../components/dashboard/ProductPerformance';

const Files = () => {
  return (
    <PageContainer title="Shadow" description="this is Shadow">
        <ProductPerformance />
    </PageContainer>
  );
};

export default Files;
