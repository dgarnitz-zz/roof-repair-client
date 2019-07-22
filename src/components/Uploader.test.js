import React from 'react';
import { shallow, mount } from 'enzyme';
import Uploader from './Uploader';

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Uploader />', () => {
  it('renders without crashing', () => {
    shallow(<Uploader />);
  });

  it('mounts without crashing', () => {
    mount(<Uploader />);
  });
});

