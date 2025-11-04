// import Link from 'next/link';
// import { Timestamp } from '../components/Timestamp';
// import Button from '../components/ui/Button';

export default async function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='home'>
      {children}
      <footer>Mi footer común</footer>
    </div>
  );
}
