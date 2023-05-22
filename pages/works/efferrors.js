import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Survey Errors" duration={0.5}>
    <Container maxW='container.md'>
      <Title>
      A Score Function to Prioritize Editing in Household Survey Data: A Machine Learning Approach <Badge>2023</Badge>
      </Title>
      <List ml={4} my={4}>
      <ListItem>
          <Meta color={"green"}>Coauthors</Meta>
          <span>
          <Link href="https://sites.google.com/view/garciauribe" target="_blank">
              Sandra García-Uribe
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta color={"green"}>Conference Alert!</Meta>
          This paper will be presented at the <Link href="https://ww2.amstat.org/meetings/sdss/2023/" target="_blank">Symposium of Data Science and Statistics</Link> of the American Statistical Association (2023).
        </ListItem>
        <ListItem>
        <Meta color={"green"}>Topics</Meta>
          Survey Methodology, Machine Learning
        </ListItem>
      </List>
      <P> Errors in household finance survey data may proliferate in population estimates, specially when there is oversampling of some population groups. Manual case-by-case revision has been commonly applied in order to identify and correct potential errors and omissions. Using data from the Spanish Survey of Household Finances we provide the best-performing supervised classification algorithm for the task of prioritizing cases with substantial errors and omissions. Our results show that a Gradient Boosting Trees classifier outperforms several competing classifiers. We also provide a framework that takes into account the trade-off between precision and recall in the survey agency in order to select the optimal classification threshold.
      </P>
    </Container>
  </Layout>
)

export default Work
// export { getStaticProps } from '../../components/chakra'
