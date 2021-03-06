import { Card, Form } from 'antd'
import ViewBoard from 'components/metric/ViewBoard'
import ServerRoleSelect from 'components/meta/ServerRole'
import { SystemBoardForRole } from 'config/monitoring/System'
import * as React from 'react'

interface SystemProps {
}

interface SystemState {
}

export default class System extends React.Component<SystemProps, SystemState> {

  render() {
    return (
      <React.Fragment>
        <Card>
          <Form layout="inline"
            style={{
              width: "calc(100%)",
              textAlign: "left",
            }} >
            <Form.Item label="Server Role">
              <ServerRoleSelect />
            </Form.Item>
          </Form>
        </Card>
        <ViewBoard board={SystemBoardForRole} />
      </React.Fragment>
    )
  }
}