import FeaturedSection from '@/components/FeaturedSection';
import Topbar from '@/components/Topbar'
import { ScrollArea } from '@/components/ui/scroll-area';
import { useMusicStore } from '@/stores/useMusicStore';
import { useEffect } from 'react';

const HomePage = () => {
  const { 
    fetchFeaturedSongs,
    fetchMadeForYouSongs,
    fetchTrendingSongs, 
    isLoading, 
    madeForYouSongs, 
    featuredSongs,
    trendingSongs 
  } = useMusicStore();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchMadeForYouSongs();
    fetchTrendingSongs();
  }, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

  // console.log({ isLoading, madeForYouSongs, featuredSongs, trendingSongs });


  return (
  <main className='rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900' >
    < Topbar />
    <ScrollArea className='h-[calc(100vh-180px)]' >
      <div className='p-4 sm:p-6'>
        <h1 className='text-2xl sm:text-3xl font-bold mb-6'>Good afternoon</h1>
        < FeaturedSection />
      </div>
      
      <div className=' space-y-8'>
        <p> made for you</p>
        <p> trending</p>
      </div>
    </ScrollArea>
  </main>
  );
};

export default HomePage;