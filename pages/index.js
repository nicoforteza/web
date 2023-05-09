import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'
import { mode } from '@chakra-ui/theme-tools'


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading 
          as="h2" 
          variant="page-title"
          style={{'letter-spacing': '-0.3px'}}
          >
            Nicolás Forteza
          </Heading>
          <p>Data Scientist</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={0}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/takuya.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph
        
        >
        Hi! I'm a data scientist based in Madrid who enjoys creating data products and 
        research in economics. I currently work at the DG of Economics, Statistics 
        and Research of the {' '}
          <Link as={NextLink} href="https://www.bde.es/bde/es/" target='blank_' passHref scroll={false}>
            Bank of Spain
          </Link>
          . I'm part of the team that conducts the {' '}
          <Link as={NextLink} href="https://app.bde.es/efs_www/home?lang=ES" target='blank_' passHref scroll={false}>
            Spanish Survey of Household Finances
          </Link>
          . In addition, I research in various economic topics, using data science techniques and methodologies. I invite yo take a look at <span></span>
          <Link as={NextLink} href="/works" passHref scroll={false}>
            my work.
          </Link>
        </Paragraph>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1994</BioYear>
          Born and raise in Spain, Argentinian descendant.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          B.Sc. Economis and Finance at Universidad Autónoma de Madrid.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          M.Sc. Data Science at CUNEF and worked at {''} 
          <Link href="https://www.etsfactory.com/" target="_blank">
              ETS Asset Management.
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at {''} 
          <Link href="https://keepler.io/" target="_blank">
              Keepler Data Tech.
          </Link>
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Working at the Bank of Spain.
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Contact
        </Heading>
        <BioSection>
          <BioYear>Email</BioYear>
          nicolas.forteza@bde.es
        </BioSection>
        <BioSection>
          <BioYear>Phone</BioYear>
          +34 675382147
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List spacing={0}>
          <ListItem>
            <Link href="https://github.com/nicoforteza" target="_blank">
              <Button
                variant="ghost"
                style={{"text-align": "left !important", "padding-left": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoLogoGithub />}
              >
                @nicoforteza
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/nicoforteza1" target="_blank">
              <Button
                variant="ghost"
                style={{"text-align": "left !important", "padding-left": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoLogoTwitter />}
                padding-left={0}
              >
                @nicoforteza1
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nicoforteza/" target="_blank">
              <Button
                variant="ghost"
                style={{"text-align": "left !important", "padding-left": "0px"}}
                colorScheme={mode('#319795', '#ff63c3')}
                leftIcon={<IoLogoLinkedin />}
              >  Linkedin
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getStaticProps } from '../components/chakra'
