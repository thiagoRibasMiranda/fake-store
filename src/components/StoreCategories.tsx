import * as React from 'react';
import {
  Button,
  Flex,
} from '@chakra-ui/react';
import getAllCategories from '../services/getAllCategories';

interface Props {
  handleClick: (category: string) => void,
}

export function StoreCategories(props: Props): JSX.Element {
  const { handleClick } = props;
  const [categories, setCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    getAllCategories()
      .then((res) => setCategories(res));
  }, []);

  return (
    <Flex justify="space-evenly" p="1">
      <Button fontSize="md" color="blue.900" bg="none" onClick={() => handleClick('AllCategories')}>All Categories</Button>
      {categories && categories.map((category) => (<Button key={category} fontSize="md" color="blue.900" bg="none" onClick={() => handleClick(category)}>{category}</Button>))}
    </Flex>
  );
}
