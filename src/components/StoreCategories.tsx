import * as React from 'react';
import {
  Flex,
  Text,
} from '@chakra-ui/react';
import getAllCategories from '../services/getAllCategories';

export function StoreCategories(): JSX.Element {
  const [categories, setCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res));
  }, []);

  return (
    <Flex justify="space-evenly" p="1" borderBottom="1px" borderColor="gray.200">
      <Text fontSize="xs" color="blue.700">All Categories</Text>
      {categories && categories.map((category) => (<Text fontSize="xs" color="blue.700">{category}</Text>))}
    </Flex>
  );
}
