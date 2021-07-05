import { Entity, model, property } from '@loopback/repository';

@model()
export class PaymentRequest extends Entity {
  @property({
    type: 'number',
    id: true,
    // generated: false,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  status: string;

  @property({
    type: 'number',
    required: true,
  })
  amount: number;

  constructor(data?: Partial<PaymentRequest>) {
    super(data);
  }
}

export interface PaymentRequestRelations {
  // describe navigational properties here
}

export type PaymentRequestWithRelations = PaymentRequest &
  PaymentRequestRelations;
