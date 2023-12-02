import { createClient } from '@supabase/supabase-js';
import Gallery from '@/components/Gallery';

type Image = {
  id: number;
  imageSrc: string;
  created_at: string;
};

export default async function generateStaticParams() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );

  const { data } = await supabaseAdmin.from('images').select('*').order('id');

  return (
    <div>
      <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-[60px] font-extrabold">These are my bags</h1>
      </div>
      <Gallery images={data!} />
    </div>
  );
}
