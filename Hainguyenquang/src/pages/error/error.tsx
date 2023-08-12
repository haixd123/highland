import React from 'react';
import { Button, Result } from 'antd';

const Error: React.FC = () => (
  <Result
    status="404"
    title="SORRY"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button href='/home' type="primary">Back Home</Button>}
  />
);

export default Error;