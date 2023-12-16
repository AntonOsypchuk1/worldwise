'use client'

import React from 'react';
import City from "@/components/city/City";

type PropsType = {
  params: {
    id: string
  }
}

const Page = ({params: {id}}: PropsType) => {
  return (
    <>
      <City cityId={Number(id)}/>
    </>
  );
};

export default Page;