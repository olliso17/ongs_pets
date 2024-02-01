import { Controller } from "@nestjs/common";
import * as amqp from 'amqplib';

@Controller()
export class Consumer {

    async  startConsumer() {
    const rabbitMQUrl = 'amqp://localhost';
    const queueName = 'product_queue';

    const connection = await amqp.connect(rabbitMQUrl);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName);

    console.log('Waiting for messages in the queue...');

    channel.consume(
        queueName,
        (message) => {
        if (message !== null) {
            console.log('Received message:', message.content.toString());
            // Execute a lógica necessária para lidar com a mensagem recebida
            channel.ack(message);
        }
        },
        { noAck: false }
    );
    }

    // startConsumer().catch(console.error);
}
