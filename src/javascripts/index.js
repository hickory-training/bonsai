import ZAFClient from 'zendesk_app_framework_sdk';

const client = ZAFClient.init();


client.on('app.registered', function() {
  client.invoke('resize', { height: '100vh', width: '80vw' });
});
