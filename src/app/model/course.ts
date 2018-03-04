import {Teacher} from './teacher';

export class Course {
  id: string;
  name: string;
  duration: number;
  startDate: Date;
  endDate: Date;
  teacher: Teacher;
}
