"use client";

import { useEffect, useState } from 'react';
import TilePanel from '@/components/TilePanel';
import { supabase } from '@/lib/supabaseClient';
import { FaGlobe } from 'react-icons/fa';

type Partner = {
  id: string;
  name: string;
  description?: string;
  logo_url?: string;
  website?: string;
};

export default function PartnerSection() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('partners')
        .select('*');

      if (error) {
        console.error('Error fetching partners:', error);
        setError(error.message);
      } else if (data) {
        setPartners(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center py-4">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-4">Error: {error}</p>;


  const partnerTiles = partners.map((partner) => ({
    name: partner.name,
    desc: partner.description || '',
    icon: partner.logo_url 
      ? <img src={partner.logo_url} alt={partner.name} width={110} className="max-h-[110px] object-contain"/>
      : <FaGlobe className="bg-color-03 rounded w-16 h-16 text-color-01 mt-1 p-4" />,
    url: partner.website,
    classNames: "lg:h-70"
  }));

  return (
    <TilePanel title="Host Organizations & Partners" tiles={partnerTiles} />
  );
}
