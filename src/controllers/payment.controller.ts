import { inject } from '@loopback/core';
import { post, Request, requestBody, RestBindings } from '@loopback/rest';
import { PaymentRequest } from '../models';

export class PaymentController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `POST /payments`
  @post('/payments')
  ping(@requestBody() payment: PaymentRequest): object {
    // Reply with a status and the payment object
    payment.status = 'success';
    return payment;
  }
}
