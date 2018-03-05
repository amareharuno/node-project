import {Teacher} from './teacher';

export class Course {
  id: string;
  name: string;
  startDate: Date;
  endDate: Date;
  teacher: Teacher;
}
