// expose "publicRuntimeConfig" within tests.
import { setConfig } from 'next/config'
import { publicRuntimeConfig } from './next.config'
setConfig({ publicRuntimeConfig })

// configure enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
