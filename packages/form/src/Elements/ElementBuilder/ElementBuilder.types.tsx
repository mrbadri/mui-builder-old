export enum ELEMENT_BUILDER {
  FIELDS = 'fields',
  FIELD_BUILDER = 'fieldBuilder',
  SECTIONS = 'sections',
  SECTION_BUILDER = 'sectionBuilder',
  FORMS = 'forms',
  FORM_BUILDER = 'formBuilder',
  ELEMENTS = 'elements',
}

export interface ElementBuilderProps {
  component: any;
}
