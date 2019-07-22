import React from 'react';
import { shallow, mount } from 'enzyme';
import Main from './Main';

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Main />', () => {
  it('renders without crashing', () => {
    shallow(<Main />);
  });

  it('mounts without crashing', () => {
    mount(<Main />);
  });
});