import getSponsors from '@/actions/user/getSponsors';
import ComponentTest from '@/components/ComponentTest';

export default async function Home() {
  let allSponsors = await getSponsors();

  console.log(allSponsors);

  const Callback = async (data) => {
    'use server';
    // Ich kann hier Backend Seitig arbeiten
    //Den Return bekommt die Componente/Client
    return 'Hallo';
  };

  return (
    <main>
      <ComponentTest sponsors={allSponsors} callback={Callback} />
    </main>
  );
}
