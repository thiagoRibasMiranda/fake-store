import * as React from 'react';
import {
  Flex,
  SkeletonText,
} from '@chakra-ui/react';

export function SkeletonItem(): JSX.Element {
  return (
    <Flex direction="column" width="100%">
      <SkeletonText mt="2" noOfLines={1} skeletonHeight="14" />
    </Flex>
  );
}
