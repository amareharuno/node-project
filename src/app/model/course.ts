import {Teacher} from './teacher';

export class Course {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  teacherId: number;
  teacher: Teacher;
}
