import { Injectable, Logger } from '@nestjs/common';
import { AbstactRepository } from '@app/common';
import { ReservationDocument } from './models/reservation.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ReservationsRepository extends AbstactRepository<ReservationDocument> {
  protected readonly logger = new Logger(ReservationDocument.name);

  constructor(
    @InjectModel(ReservationDocument.name)
    reservationModel: Model<ReservationDocument>,
  ) {
    super(reservationModel);
  }
}
