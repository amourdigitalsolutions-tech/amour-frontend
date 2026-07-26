import MarketplaceHeader from '../components/marketplace/MarketplaceHeader';
import SidebarFilters from '../components/marketplace/SidebarFilters';
import TruckCard from '../components/marketplace/TruckCard';
import { ChevronDown } from 'lucide-react';

const MOCK_TRUCKS = [
  {
    id: '1',
    title: '2023 Peterbilt 579',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ48pIuHicP_Slqw87Cmrw8OSXijTrVhkhcTAkccXiQZSpC6p06ejPI97aMS7doCrHnLhSeYFiwK8SrBfs_kNctOO5WqbEFPddTN0OI57cZiZX6O11qIq5zytgmgevXG6J41XxWctvmKxGluvMrVN89SVKFpK3DYmCly-sEHIcH2XX4GEKTuT0mIUh0LezIHHCNDe7yWjgMo5rchSmqkQYnoVNd0nkXaG4jci_oOUMhptzn65MVI0QcGBgWc5xq9rg3zYW6baPVk17',
    mileage: '150,000 mi',
    fuelType: 'Diesel',
    price: '$145,000'
  },
  {
    id: '2',
    title: '2023 Kenworth KRC',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCNgzwPVnU77CnZxGzkTwT9kz5_6Ci4Lev1ps87BVMzIuysonmUtjygzDrjU5QuDolYryCXJppPDf5ruTUohs1TeVyTKLDx8_EwUvfvFokL_eXKK83fHbWu1SNYb3AHcGnDNvP4nYxkorE_BCspSK4QcMqqvXnW4OFqUKIL2rr4zXUBOjoYB1qFvJxp02eVqT6OC5Lo7Y8Umw78SdaKKfwdKmbDL2IhcdXj8nZO_FYcbyZT1j1bYwH26E8LsyeUsz7onUTGF54YHOH',
    mileage: '150,000 mi',
    fuelType: 'Diesel',
    price: '$145,000'
  },
  {
    id: '3',
    title: '2023 International NFT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLNUdM7C1d0yERaFMELdVuZe55lSJ9uyPX1UXr4Fw7ViLmliMsYspQD-bYwrxLD_LFGWiQL24gDwgJXylt1V27FzMiJcIPBzRvnG8qGb0pCkksFw1VWG2cF8Tz2hpes5VgwNnL1w4_I9wLlkjTRCShspPE4uqXu70CpLszQlSmgbwGECf0WVK9xxJLIEgsM6-xM7FR9Fg2YsDsOpx2uYZha5rIDbfbOy5EyKgs8_R0bGSE8zT7hcgEyl7uUh9I5Qv6fLsA5PLW6Hz6',
    mileage: '130,000 mi',
    fuelType: 'Diesel',
    price: '$145,000'
  },
  {
    id: '4',
    title: '2023 Peterbilt 579',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAdrGne1TWw0RdCOQbaU3oAXJyHNi-RiVamPg0wLN_UvuZeX0-a9JUzMfAXYwcm7eeEf7D1xziGLI-XDsnjUpfDZdHzR3fT5be6oCdO4Gf1hKVOBJQs4DtQ7lGzgEpC79ud2SF9fbbHV4S27tbKN1phblClX890C_J8xXHyCKWRIXixKJGQYgI5BrLZJsXXHdCbDlcubCImI6s_NOzVs3O3urYwOa9hn-Pmgm1KgzNw9CHqG2rh2wKAK0WQeVlNprB69jKH7T69bb6',
    mileage: '150,000 mi',
    fuelType: 'Diesel',
    price: '$145,000'
  },
  {
    id: '5',
    title: '2023 Kenworth SFR',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkWHjRb133HffOSuLYPcPlFTEvd9j8owDgcQOKPCLL4kASNPpb74xiyefTezA_P1prY56nSGJScAJPwTI-TVQcHPMG1V-I8DgORSoVTaOmFsKxaUpgiicmezJvklUChmo8dhnOZg_r6UUqnyGlPo2adX0zBPnv8XqWayK9FpOigsQHY7Gp1Xk_0benX8B_gc1-Qz9RwD1N0nIau_ekY_ENd8fERDV4EDke5SEWMH7PrQPbrGFhuByMSXlBgm2-Uf5SPRGNGstt4kcc',
    mileage: '150,000 mi',
    fuelType: 'Diesel',
    price: '$175,000'
  },
  {
    id: '6',
    title: '2023 International RRT',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyk_ig8tVt_Yj9cHvMhGPwIdz172EJelo4OGkkRCgumL8xUGHIkQwupAQRXtdDv4bz0-aWWmmxblp2lxD7ZcJ5EYVZJ6U9epwIvrWwOdlOcVf7Pba1kT6biJWci6XbWjwlAULVt8jR3oQFMG9YR5XIYwFLTZvMWYl47akiz1hmHgC_Sp38EVEkOIC2E9x8ZT0-YcAvi7qtXO4AWKjxhPCczUxivg_cegpCOlru_xzK8upjBV-QHdK3NA-YtNJHMZ57dXU_sstMad_e',
    mileage: '150,000 mi',
    fuelType: 'Diesel',
    price: '$130,000'
  }
];

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-surface font-inter text-slate-800 flex flex-col">
      <MarketplaceHeader />
      
      <main className="flex flex-1 overflow-hidden">
        <SidebarFilters />
        
        <section className="flex-1 p-6 overflow-y-auto">
          {/* Grid Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-slate-600 font-medium">Showing 12 results</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-500">Sort By</span>
              <div className="relative">
                <select className="appearance-none border border-slate-200 rounded-lg text-sm py-2 pl-3 pr-8 focus:ring-1 focus:ring-primary focus:border-primary bg-white cursor-pointer outline-none">
                  <option>Newest, Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>
          
          {/* Marketplace Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-12">
            {MOCK_TRUCKS.map((truck) => (
              <TruckCard 
                key={truck.id}
                id={truck.id}
                title={truck.title}
                image={truck.image}
                mileage={truck.mileage}
                fuelType={truck.fuelType}
                price={truck.price}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
