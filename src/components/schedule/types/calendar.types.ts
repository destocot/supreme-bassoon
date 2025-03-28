export const APPOINTMENT_LEAD_TIME = 28;

export interface Appointment {
  title: string;
  start: Date | string;
  end: Date | string;
  id: number;
  extendedProps: {
    department: string;
    serviceType: string;
    technician: string;
    customerName: string;
  };
}
export interface BackgroundEvent {
  id: string;
  start: string;
  end: string;
}
