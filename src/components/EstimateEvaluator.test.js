import React from 'react';
import { shallow, mount } from 'enzyme';
import EstimateEvaluator from './EstimateEvaluator';

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<EstimateEvaluator />', () => {
  it('renders without crashing', () => {
    shallow(<EstimateEvaluator />);
  });

  it('mounts without crashing', () => {
    mount(<EstimateEvaluator />);
  });
});