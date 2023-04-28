import React from 'react';

import { CHILDREN_TYPE } from './ChildBuilder.types';

import Fields from '../../Fields/Fields';

import FieldBuilder from '../../Fields/FieldBuilder/FieldBuilder';
import Sections from '../../Sections/Sections';
import SectionBuilder from '../../Sections/SectionBuilder/SectionBuilder';
import Forms from '../../Forms/Forms';
import FormBuilder from '../../Forms/FormBuilder/FormBuilder';
import Children from '../Children';

const controller: any = {
  [CHILDREN_TYPE.FIELDS]: Fields,
  [CHILDREN_TYPE.FIELD_BUILDER]: FieldBuilder,
  [CHILDREN_TYPE.SECTIONS]: Sections,
  [CHILDREN_TYPE.SECTION_BUILDER]: SectionBuilder,
  [CHILDREN_TYPE.FORMS]: Forms,
  [CHILDREN_TYPE.FORM_BUILDER]: FormBuilder,
  [CHILDREN_TYPE.CHILDREN]: Children,
};

const ChildBuilder = (props: any) => {
  const Child = controller?.[props?.type] ?? React.Fragment;

  return <Child {...props} />;
};

export default ChildBuilder;
