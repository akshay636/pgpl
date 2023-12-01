import AdmissionCAT from '@/components/CAT/AdmissionCAT';
import Loader from '@/components/Loader/Loader';

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <AdmissionCAT />
      {/* <Loader/> */}
    </main>
  );
}
