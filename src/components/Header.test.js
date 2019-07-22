import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Header />', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});


