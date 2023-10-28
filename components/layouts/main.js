import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import React from 'react';


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={12}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Nicolás Forteza" />
        <meta name="keywords" content="nicolas forteza, bde, banco de españa, bank of spain" />
        <link rel="apple-touch-icon" href="icons8-mate-office-32.png" />
        <link rel="shortcut icon" href="/icons8-mate-office-16.png" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <title>Nico Forteza Web</title>
        <meta
          name="description"
          content="Check Nicolás Forteza's work as a Data Scientist at the Banco de España (Bank of Spain)"
          key="desc"
        />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={24}>

        {children}

      </Container>
    </Box>
  )
}

export default Main
