import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  padding-left: 5.5em;
  text-indent: -5.5em;

  @media (max-width: 480px) {
    padding-left: 0;
    text-indent: 0;
    margin-bottom: 0.8em;
  }
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;

  @media (max-width: 480px) {
    display: block;
    margin-right: 0;
    margin-bottom: 0.2em;
  }
`
