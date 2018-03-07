import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/App';

configure({ adapter: new Adapter() });

describe('Photo Gallery App', () => {
  it('should render a .slideshow class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.slideshow').length).toEqual(1);
  });

  it('should render a .gallery class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.gallery').length).toEqual(1);
  });
});