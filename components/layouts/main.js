import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import DeckGL from '@deck.gl/react';
import {MapView, FirstPersonView} from '@deck.gl/core';
import {Map} from 'react-map-gl';
import React from 'react';


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={12}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nico's homepage" />
        <meta name="author" content="Nicolás Forteza" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="icons8-mate-office-32.png" />
        <link rel="shortcut icon" href="/icons8-mate-office-16.png" type="image/x-icon" />
        <meta name="twitter:title" content="Nicolás Forteza" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@nicoforteza1" />
        <meta name="twitter:creator" content="@nicoforteza1" />
        <meta property="og:site_name" content="Nicolás Forteza" />
        <meta name="og:title" content="Nicolás Forteza" />
        <meta property="og:type" content="website" />
        <title>Nicolás Forteza - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={24}>

        {children}

      </Container>
    </Box>
  )
}

export default Main
