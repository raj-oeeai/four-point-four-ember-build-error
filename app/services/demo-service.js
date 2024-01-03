import Component from '@glimmer/component';
import mqtt from 'mqtt';

export default class PeopleListComponent extends Component {
  connect() {
    try {
      console.log('displays');

      const url = 'ws://broker.emqx.io:8083/mqtt';
      const mqttOptions = {
        clean: true,
        connectTimeout: 4000,
        clientId: 'emqx_test',
        username: 'emqx_test',
        password: 'emqx_test',
      };
      this.client = mqtt.connect(url, mqttOptions);
    } catch (error) {
      console.log(error);
    }
  }
}
