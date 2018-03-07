export class Course {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  teacherId: number;

  constructor(id: number, name: string, startDate: Date, endDate: Date, teacherId: number) {
    this.id = id;
    this.name = name;
    this.startDate = startDate;
    this.endDate = endDate;
    this.teacherId = teacherId;
  }
}
