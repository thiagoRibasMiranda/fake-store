import * as React from 'react';
import {
  Flex,
  Center,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';

export function SkeletonCard(): JSX.Element {
  return (
    <Flex direction="column" width="240px">
      <Center>
        <Skeleton height="80px" width="90%" />
      </Center>
      <SkeletonText mt="2" noOfLines={4} spacing="4" skeletonHeight="8" />
    </Flex>
  );
}
