import * as React from 'react';
import {
  Box,
  Center,
  Skeleton,
  SkeletonText,
  useBreakpointValue,
} from '@chakra-ui/react';

export function SkeletonCard(): JSX.Element {
  return (
    <Box width="150px" border="1px" borderColor="blue.800" borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}>
      <Center>
        <Skeleton height="80px" width="90%" />
      </Center>
      <SkeletonText mt="2" noOfLines={4} spacing="4" skeletonHeight="8" />
    </Box>
  );
}
