import { inject } from '@loopback/core';
import { DefaultCrudRepository } from '@loopback/repository';
import { PaymentsDbDataSource } from '../datasources';
import { PaymentRequest, PaymentRequestRelations } from '../models';

export class PaymentRequestRepository extends DefaultCrudRepository<
  PaymentRequest,
  typeof PaymentRequest.prototype.id,
  PaymentRequestRelations
> {
  constructor(
    @inject('datasources.PaymentsDB') dataSource: PaymentsDbDataSource,
  ) {
    super(PaymentRequest, dataSource);
  }
}
