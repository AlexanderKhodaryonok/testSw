// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from 'enzyme';
// eslint-disable-next-line import/no-extraneous-dependencies
import EnzymeAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new EnzymeAdapter() });
