/* eslint-disable  @typescript-eslint/no-explicit-any */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate, ValidationError } from 'class-validator'
import { ValidationException } from '../exceptions/validation.exception'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    const obj = plainToClass(metadata.metatype, value)

    const errors: ValidationError[] = await validate(obj)
    if (errors.length > 0) {
      const messages = this.buildErrorMessages(errors)
      throw new ValidationException(messages)
    }

    return obj
  }

  private buildErrorMessages(errors: ValidationError[]): string[] {
    return errors.map((err) => {
      const constraints = err.constraints ? Object.values(err.constraints).join(', ') : ''
      return `${err.property} - ${constraints}`
    })
  }
}
