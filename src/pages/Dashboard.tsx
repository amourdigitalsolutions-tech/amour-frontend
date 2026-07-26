import Layout from '../components/layout/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <header className="mb-10">
        <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">Welcome back, Amour Trucking.</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">Here is the status of your fleet and compliance filings today.</p>
      </header>
      
      {/* Dashboard Grid Placeholder */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
         {/* We will implement the actual Stat Cards in Phase 3 */}
         <div className="bg-white p-6 rounded-xl shadow border border-transparent">
           <h3 className="text-on-surface-variant">Active Fleet</h3>
           <p className="font-headline-md">2 Vehicles</p>
         </div>
      </section>
    </Layout>
  );
}
