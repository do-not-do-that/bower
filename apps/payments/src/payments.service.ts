import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreateChargeDto } from '../../../libs/common/src/dto/create-charge.dto';

@Injectable()
export class PaymentsService {
  private readonly stripe = new Stripe(
    this.configSerivce.get<string>('STRIPE_SECRET_KEY'),
    {
      apiVersion: '2024-06-20',
    },
  );
  constructor(private readonly configSerivce: ConfigService) {}

  async createCharge({ amount }: CreateChargeDto) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      payment_method: 'pm_card_visa',
      amount: amount * 100,
      confirm: true,
      currency: 'usd',
      return_url: 'http://localhost:3000',
    });

    return paymentIntent;
  }
}
