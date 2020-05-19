import io from 'socket.io-client';

const socket = io('https://at3s-twilio-demo.herokuapp.com:8081');

export default socket;
