import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import categories from '../../utils/categories';
import Category from '../Category';

interface CategorySelectProps {
  categorySelected: string;
  setCategory: (categoryId: string) => void;
  hasCheckBox?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  categorySelected,
  setCategory,
  hasCheckBox = false,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map(category => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          hasCheckBox={hasCheckBox}
          onPress={() => setCategory(category.id)}
        />
      ))}
    </ScrollView>
  );
};

export default CategorySelect;
