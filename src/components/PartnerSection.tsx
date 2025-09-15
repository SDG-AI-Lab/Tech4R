import TilePanel from '@/components/TilePanel';
import { supabase } from '@/lib/supabaseClient';
import { FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

type Partner = {
  id: string;
  name: string;
  description?: string;
  logo_url?: string;
  website?: string;
};


export default async function PartnerSection() {
  const { data, error } = await supabase
    .from('partners')
    .select('*');

  if (error) {
    return <p className="text-center text-red-500 py-4">Error: {error.message}</p>;
  }

  const partners: Partner[] = data ?? [];

  const partnerTiles = partners.map((partner: Partner) => ({
    name: partner.name,
    desc: partner.description || '',
    icon: partner.logo_url 
      ? (
        <div className="flex items-center justify-center w-16 h-16">
          <Image
            src={partner.logo_url}
            alt={partner.name}
            width={64}
            height={64}
            className="max-w-16 max-h-16 object-contain"
            unoptimized
            style={{
              objectFit: 'contain',
              objectPosition: 'left'
            }}
          />
        </div>
      )
      : <FaGlobe className="bg-color-03 rounded w-16 h-16 text-color-01 mt-1 p-4" />,
    url: partner.website
  }));

  return (
    <TilePanel title="Host Organizations & Partners" tiles={partnerTiles} />
  );
}
