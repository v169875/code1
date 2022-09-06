
// jsx语法  组件必须大写开头  必须整体包大的元素
import 'antd/dist/antd.css';
import { Fragment } from "react";
import { Input, Button, List, Typography } from 'antd';
import store from './store/index';


function TodoList() {

  constructor(props)
  super(props);
  console.log(store.getState());//初始化
}

return (
  <Fragment>
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Input placeholder="todo info" style={{ width: '300px', marginLeft: '10px' }} />
      <Button type="primary">提交</Button>
      <List
        style={{ margin: '10px', width: '300px' }}
        bordered
        dataSource={[]}
        renderItem={item => (
          <List.Item>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
          </List.Item>
        )}

      />
    </div>
  </Fragment>
);
}




export default TodoList;
