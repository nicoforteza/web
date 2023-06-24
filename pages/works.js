import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, WorkGridItemNoLink, WorkGridItemExternal } from '../components/grid-item'

const Works = () => (
  <Layout title="Works" duration={0.5}>
    <Container maxW="container.md">
      <Heading as="h3" variant="section-title">
        Data Apps
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
          id="effwebsite" 
          title="EFF Website"
          meta1={"2020-"}
          >
          Spanish Survey of Household Finances (EFF) website
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" variant="section-title">
          Research
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={1}>
        <Section delay={0.3}>
          <WorkGridItem
          id="efferrors" 
          title="A Score Function to Prioritize Editing in Household Survey Data: A Machine Learning Approach"
          meta1="2023"
          meta2="Draft soon!"
          meta_color_2={"green"}
          >
          with Sandra García-Uribe
          </WorkGridItem>
        </Section>
        
        <Section delay={0.3}>
          <WorkGridItemNoLink
          id="styly" 
          title="News Concentration"
          meta1="2023"
          meta2="Work in Progress"
          meta_color_2={"red"}
          >
          with Sandra García-Uribe
          </WorkGridItemNoLink>
        </Section>

        <Section delay={0.3}>
          <WorkGridItemNoLink
            title="Alternative Unemployment Measures with Machine Learning"
            meta_color_2={"green"}
            meta2="Draft soon!"
            meta1="2023"
            >
            with Sergio Puente García
          </WorkGridItemNoLink>
        </Section>

        <Section delay={0.3}>
          <WorkGridItemNoLink
            title="Real Time Price Rigidity Measures Using Webscraped Price Data"
            meta_color_2={"green"}
            meta2="Draft soon!"
            meta1="2023"
            >
            with Elvira Prades and Marc Roca
          </WorkGridItemNoLink>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6}/>
        <Heading as="h3" variant="section-title">
          Code
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={1}>

      <Section delay={0.5}>
          <WorkGridItemNoLink
           title="ggBdE"
           meta1={"2023"}
           >
          A library in R to customize ggplot graphics according to the Bank of Spain corporate image.
          </WorkGridItemNoLink>
        </Section>

        <Section delay={0.5}>
          <WorkGridItemExternal
          href={"https://github.com/nicoforteza/expden"}
          title="Experienced Density"
          meta1={"2023"}
          >
            Python library for the computation of novel economic geography measures.
          </WorkGridItemExternal>
        </Section>

      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
// export { getStaticProps } from '../components/chakra'
