import { Controller } from "@nestjs/common";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class Consumer {
  constructor(private readonly consumer: <T>) {}

  @EventPattern("product_created")
  async handleProductCreated(data: Record<string, unknown>) {
    // Lógica para lidar com o evento de produto criado
    console.log("Received product created event:", data);
  }
}
