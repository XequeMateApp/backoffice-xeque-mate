export abstract class NotificationRegisterRequestDto{
  name: string;
  status: string;
  content: string;
  repetition: string;
  start: Date;
  hour: string;
  filter: string
}
