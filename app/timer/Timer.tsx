'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Timer() {
  const router = useRouter();
  setTimeout(() => router.push('/books'), 3000);
  return (
    <p className='mt-6 text-lg font-semibold text-green-600'>
      You will be redirected to the books page in 3 seconds...
    </p>
  );
}
