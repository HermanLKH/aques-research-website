// types.ts

export interface GPS {
  latitude: number;
  longitude: number;
}

export interface Location {
  id: number;
  name: string;
  description: string;
  gps: GPS;
}

export interface LocationData {
  locationId: number; // $int64
  parameters: Parameter[];
  earliestTime: EpochTimeStamp;
}

export interface Parameter {
  parameterName: string;
  unitName: string;
  parameterId: string; // Example: 27, Matches the parameter Ids defined in the System Integration Specification document -OR- the custom name given to a custom parameter
  readings: Reading[]; // Represents readings for this parameter
  unitId: string; // Example: 163, Matches the unit Ids defined in the System Integration Specification document -OR- the custom unit given to a custom parameter
  latestTime: number;
}

export interface Reading {
  timestamp: EpochTimeStamp; // $int64, Epoch time in seconds when this reading was recorded
  value: number; // $double, The value of this reading. If there was more than 1 reading in this minute, this value will be the average of all the readings during that minute
}

export interface SisIdListing {
  parameters: { [key: string]: string }; // Provides common names for the parameters represented elsewhere by SIS ids or keys
  units: { [key: string]: string }; // Provides common names for the units represented elsewhere by SIS ids or keys
}

// researcher profile
export interface Profile {
  name: string;
  profile_picture: string;
  role: string;
  contact: Contact;
  institution: string;
  location: string;
  area_of_interest: string[];
  bio: string;
  careerHighlights: CareerHighlight[];
}

export interface CareerHighlight {
  title: string;
  institution: string;
  duration: string;
  description: string;
}

export interface Contact {
  email: string;
  linkedin: string;
  googlescholar: string;
}

export interface Publication {
  title: string;
  authors: string;
  year: number;

  journal: string;
  book: string;

  volume: number;
  pages: number;

  issue: number;
  doi: string;
  link: string;
}

// emailjs
declare module "emailjs-com" {
  export function sendEmail(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, any>,
    publicKey: string
  ): Promise<EmailJSResponseStatus>;

  export function sendEmailForm(
    serviceID: string,
    templateID: string,
    form: HTMLFormElement,
    publicKey: string
  ): Promise<EmailJSResponseStatus>;

  export interface EmailJSResponseStatus {
    status: number;
    text: string;
  }
}

export interface EmailFormState {
  full_name: string;
  email_id: string;
  phone_num: string;
  message: string;
}
