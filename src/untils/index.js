import { Message } from 'element-ui';

const message = ({ type, msg, duration = 1500 }) => Message({
  type,
  message: msg,
  duration,
  dangerouslyUseHTMLString: true,
});

export default message;
