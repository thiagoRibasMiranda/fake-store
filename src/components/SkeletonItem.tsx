import * as React from 'react';
import {
  Flex,
  Center,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

export function SkeletonItem(): JSX.Element {
  return (
    <Flex direction="row" justify="space-between" align="center">
      <Center>
        <Skeleton height="20px" width="90%" />
      </Center>
      <SkeletonText mt="2" noOfLines={1} spacing="4" skeletonHeight="8" />
    </Flex>
  );
}
