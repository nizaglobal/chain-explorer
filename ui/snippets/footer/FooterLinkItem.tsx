import { Center, Link, Skeleton } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import React from 'react';

import type { IconName } from 'ui/shared/IconSvg';
import IconSvg from 'ui/shared/IconSvg';

type Props = {
  icon?: IconName;
  iconSize?: string;
  text: string;
  url: string;
  isLoading?: boolean;
}

const FooterLinkItem = ({ icon, iconSize, text, url, isLoading }: Props) => {
  if (isLoading) {
    return <Skeleton my="3px">{ text }</Skeleton>;
  }

  return (
    <Link href={ url } display="flex" alignItems="center" h="30px" target="_blank" fontSize="xs" color={ mode('blackAlpha.800', '#344054')({}) }>
      { icon && (
        <Center minW={ 6 } mr={ 2 }>
          <IconSvg boxSize={ iconSize || 5 } name={ icon }/>
        </Center>
      ) }
      { text }
    </Link>
  );
};

export default FooterLinkItem;
