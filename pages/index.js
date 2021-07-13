/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';

import Link from 'next/link';

import { Container, Typography } from '@material-ui/core'


export const IndexPage = () => (
  <div>
    <Head title='Home'/>
    <div>
      <Typography variant="h3">Home</Typography>   
    </div>
    <div>
      <Link href="/cart">
        <a>View cart</a>
      </Link>
    </div>
    <div>
      <Link href="/shop">
        <a>View shop</a>
      </Link>
    </div>
  </div>
);

export default IndexPage;
