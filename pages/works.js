import { Container, Heading, SimpleGrid, Divider, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem, WorkGridItemNoLink, WorkGridItemExternal, LinkGridItem } from '../components/grid-item'

const Works = () => (
  <Layout title="Works" duration={0.5}>
    <Container maxW="container.md">
      <Heading as="h3" variant="section-title">
        Data Apps
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
      <Section>
          <LinkGridItem 
          href="https://app.bde.es/efs_www/home?lang=EN"
          title="Spanish Survey of Household Finance (ECF) website"
          meta1={"2020"}
          >
          </LinkGridItem>
        </Section>

        <Section>
          <LinkGridItem 
          href="https://app.bde.es/efs_ecf/home?lang=EN"
          title="Survey of Financial Competences (ECF) website"
          meta1={"2023"}
          >
          </LinkGridItem>
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
          <WorkGridItemNoLink
            title="Pollution, Density and Urban Access Regulations: European Evidence"
            meta_color_2={"green"}
            meta2="Draft available upon request"
            meta1="2024"
            >
              with José M. Labeaga
          </WorkGridItemNoLink>
        </Section>

      <Section delay={0.3}>
          <LinkGridItem
            href="forteza_prades_roca_2025_VAT_passthrough.pdf"
            title="Analysing the VAT Cut Pass-Through in Spain using Supermarkets' Web-scraped Data and Machine Learning"
            meta_color_2={"green"}
            meta2="Publication"
            meta1="2025"
            >
            with Elvira Prades and Marc Roca
          </LinkGridItem>
        </Section>

        <Section delay={0.3}>
          <LinkGridItem
          href="forteza_garcia-uribe-JOS.pdf" 
          title="A Score Function to Prioritize Editing in Household Survey Data: A Machine Learning Approach"
          meta2="Publication"
          meta_color_2={"green"}
          meta1="2024"
          >
          with Sandra García-Uribe
          </LinkGridItem>
        </Section>

        <Section delay={0.3}>
          <WorkGridItemNoLink
          id="styly" 
          title="Aggregate Shocks, News and Economic Activity"
          meta1="2023"
          meta2="Draft soon!"
          meta_color_2={"green"}
          >
          with Sandra García-Uribe
          </WorkGridItemNoLink>
        </Section>

        <Section delay={0.3}>
          <WorkGridItemNoLink
            title="Measuring non-Workers Labor Market Attachment with Machine Learning"
            meta_color_2={"green"}
            meta2="Draft available upon request"
            meta1="2023"
            >
            with Sergio Puente García
          </WorkGridItemNoLink>
        </Section>

        <Section delay={0.3}>
          <LinkGridItem
            title="Assessing Subjective Probabilistic Expectations in Household Surveys with Audio Records"
            href="https://zenodo.org/records/14019917" 
            meta1="2024"
            meta2="Working Paper"
            meta_color_2={"green"}
            >
            with Javier J. Alonso and Laura Crespo
          </LinkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6}/>
        <Heading as="h3" variant="section-title">
          Discussions
        </Heading>
      </Section>
      
      <SimpleGrid columns={[1, 1, 2]} gap={1}>

      <Section delay={0.4}>
          <LinkGridItem
            href="CrashNarratives_discussion.pdf"
            title="Crash Narratives"
            meta1="2024"
            >
            by William N. Goetzmann, Dasol Kim and Robert J. Shiller at ECONDAT 2024
          </LinkGridItem>
        </Section>

      </SimpleGrid>

      <Section delay={0.5}>
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
          Proprietary R library to customize ggPlot graphics according to the Bank of Spain corporate image.
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
