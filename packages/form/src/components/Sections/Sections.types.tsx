import { TNestedProps } from '../../utils/Nested/Nested.types';
import { TSectionBuilderProps } from './SectionBuilder/SectionBuilder.types';

export interface SectionsProps extends TNestedProps {
  list: TSectionBuilderProps[];
}
