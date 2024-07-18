import { Path } from 'react-hook-form';
import { CreateUserPayload } from './user';

export interface ValidationError {
  field: Path<CreateUserPayload>;
  message: string;
}
