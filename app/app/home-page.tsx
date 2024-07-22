'use client';
import { Error } from '@kt/pigmentcss';

export const HomePage = ({ facts }: { facts: { fact: string, length: string}}) => {
    return (
        <Error heading="Cat fact" subheading={facts.length} message={facts.fact} />           
    );
};
export default HomePage;
