import { IsNumber } from 'class-validator';

export class CreateChargeDto {
  // NOTE : API 버전이 바뀌어 직접적으로 카드 번호 전달할 수 없음. 따라서 해당 항목 주석처리함.
  // @IsDefined()
  // @IsNotEmptyObject()
  // @ValidateNested()
  // @Type(() => CardDto)
  // card: CardDto;

  @IsNumber()
  amount: number;
}
