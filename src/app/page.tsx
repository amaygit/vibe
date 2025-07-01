import { trpc, getQueryClient } from '@/trpc/server';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react'
import Client from './Client';

const Page = async() => {
const queryClient=getQueryClient();
void queryClient.prefetchQuery(trpc.createAI.queryOptions({text:'Amay'}))
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading Bro ....</p>}>
    <Client />
    </Suspense>
   </HydrationBoundary>
  )
}

export default Page