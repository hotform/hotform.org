import React from 'react';

/* Config */
import config from '@config';

/* React Icons */
import { HiOutlineArrowNarrowLeft } from '@react-icons/all-files/hi/HiOutlineArrowNarrowLeft';
import { HiOutlinePencil } from '@react-icons/all-files/hi/HiOutlinePencil';
import { HiOutlineArrowNarrowRight } from '@react-icons/all-files/hi/HiOutlineArrowNarrowRight';

/* Shared Types */
import { MainLayoutAllMDXEdge } from '@layouts/main-layout/shared';

/* Styles */
import * as SC from './styles';

export interface MainLayoutFooterProps{
  currentEdge?: MainLayoutAllMDXEdge;
}

const Footer: React.FC<MainLayoutFooterProps> = ({ currentEdge }) => {
  return (
    <SC.Container>
      {
        currentEdge?.node && (
          <SC.EditLink
            href={ `${config.repositoryURL}/edit/master/content${currentEdge.node.fields.slug}index.mdx` }
            target="_blank"
          >
            <HiOutlinePencil/>
            Edit this page on GitHub
          </SC.EditLink>
        )
      }
      <SC.OptionContainer>
        {
          currentEdge?.previous && (
            <SC.PreviousLink to={ currentEdge.previous.fields.slug }>
              <HiOutlineArrowNarrowLeft/>
              { currentEdge.previous.frontmatter.title }
            </SC.PreviousLink>
          )
        }
        {
          currentEdge?.next && (
            <SC.NextLink to={ currentEdge.next.fields.slug }>
              <HiOutlineArrowNarrowRight/>
              { currentEdge.next.frontmatter.title }
            </SC.NextLink>
          )
        }
      </SC.OptionContainer>
    </SC.Container>
  );
}

export default Footer;