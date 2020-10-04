import componentTypes from '@data-driven-forms/react-form-renderer/dist/cjs/component-types'
// import Tabs from '../tabs';
// import SubForm from '../sub-form';
// import Wizard from '../wizard';
// import FieldArray from '../field-array';
// import DualListSelect from '../dual-list-select';
// import Slider from '../slider';

import TextField from '../form-field-components/text-field'
import Radio from '../form-field-components/radio'
import Textarea from '../form-field-components/textarea'
import DatePicker from '../form-field-components/date-picker'
import Select from '../form-field-components/select'
import Checkbox from '../form-field-components/checkbox'
import Switch from '../form-field-components/switch'

const componentMapper = {
  [componentTypes.TEXT_FIELD]: TextField,
  [componentTypes.TEXTAREA]: Textarea,
  [componentTypes.SELECT]: Select,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.RADIO]: Radio,
  [componentTypes.DATE_PICKER]: DatePicker,
  [componentTypes.SWITCH]: Switch,
  // [componentTypes.SUB_FORM]: SubForm,
  // [componentTypes.TABS]: Tabs,
  // [componentTypes.WIZARD]: Wizard,
  // [componentTypes.FIELD_ARRAY]: FieldArray,
  // [componentTypes.DUAL_LIST_SELECT]: DualListSelect,
  // [componentTypes.SLIDER]: Slider
};

export default componentMapper;

export const components = {
  TextField,
  Textarea,
  Checkbox,
  Radio,
  Select,
  DatePicker,
  Switch,
  // DualListSelect,
  // Slider,
  // FieldArray,
  // SubForm,
  // Wizard,
  // Tabs
};
