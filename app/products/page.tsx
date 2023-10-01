import { createClient } from '@supabase/supabase-js';
import Gallery from '@/components/Gallery';

type Image = {
  id: number;
  imageSrc: string;
};

export async function generateStaticParams() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  );

  const { data } = await supabaseAdmin.from('images').select('*').order('id');
  console.log(data);

  return {
    props: {
      images: data,
    },
  };
}

export default function ProductsPage({ images }: { images: Image[] }) {
  return (
    <div>
      <Gallery images={images} />
    </div>
  );
}
