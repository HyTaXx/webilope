'use client'; 
import { useEffect, useState } from 'react';
import Hero from '../components/Hero/page';
import Introduction from '../components/Introduction/page';
import MainContent from '@/components/MainContent/page';

export default function Home() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/fetch-antelopes')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <section className='flex flex-col justify-center items-center'>
            <Hero />
            <Introduction />
            <MainContent />
            {/* {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>} */}
        </section>
    );
}
