import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import Price from './Price';

import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('<Price />', () => {
  it('renders without crashing', () => {
    shallow(<Price />);
  });

  it('renders with correct props', () => {
    const price = mount(<Price price="20" />);
    expect(price.props().price).to.equal('20');
  });

  it('updates with correct props', () => {
    const price = mount(<Price price={20} />);
    expect(price.props().price).to.equal(20);
    price.setProps({ price: 30 });
    expect(price.props().price).to.equal(30);
  });
});
