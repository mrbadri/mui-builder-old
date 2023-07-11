export enum ELEMENT_BUILDER {
  FIELDS = 'Fields',
  FIELD_BUILDER = 'FieldBuilder',
  SECTIONS = 'Sections',
  SECTION_BUILDER = 'SectionBuilder',
  FORMS = 'Forms',
  FORM_BUILDER = 'FormBuilder',
  ELEMENTS = 'Elements',
}

export interface ElementBuilderProps {
  component: any;
}
