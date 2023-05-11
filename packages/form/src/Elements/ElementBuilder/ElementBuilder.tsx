import React from 'react';

import { ELEMENT_BUILDER } from './ElementBuilder.types';

import Fields from '../../Fields/Fields';
import FieldBuilder from '../../Fields/FieldBuilder/FieldBuilder';
import Sections from '../../Sections/Sections';
import SectionBuilder from '../../Sections/SectionBuilder/SectionBuilder';
import Forms from '../../Forms/Forms';
import FormBuilder from '../../Forms/FormBuilder/FormBuilder';
import Elements from '../Elements';

const ElementBuilder = (props: any) => {
  const controller: any = {
    // Fields
    [ELEMENT_BUILDER.FIELDS]: Fields,
    [ELEMENT_BUILDER.FIELD_BUILDER]: FieldBuilder,
    // Sections
    [ELEMENT_BUILDER.SECTIONS]: Sections,
    [ELEMENT_BUILDER.SECTION_BUILDER]: SectionBuilder,
    // Forms
    [ELEMENT_BUILDER.FORMS]: Forms,
    [ELEMENT_BUILDER.FORM_BUILDER]: FormBuilder,
    // Element
    [ELEMENT_BUILDER.ELEMENTS]: Elements,
  };
  const Element = controller?.[props?.component];

  return <>{!!Element && <Element {...props} />}</>;
};

export default ElementBuilder;
