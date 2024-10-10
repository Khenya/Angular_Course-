export interface Address {
    number: string;
    street: string;
    zone: string;
  }
  
export interface Person {
  name: string;
  lastName: string;
  type: 'student' | 'professor'; 
  firstTestScore?: number;
  secondTestScore?: number;
  finalTestScore?: number;
  subject?: string; 
  address: {
    number: string;
    street: string;
    zone: string;
  };
  country: string;
  province: string;
  messages: string[];
}
  