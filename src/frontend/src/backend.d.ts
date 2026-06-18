import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Service {
    name: string;
    description: string;
    category: string;
}
export interface ConsultantProfile {
    tagline: string;
    name: string;
    email: string;
    phone: string;
}
export interface backendInterface {
    getAllServices(): Promise<Array<Service>>;
    getConsultantProfile(): Promise<ConsultantProfile>;
    getServicesByCategory(): Promise<Array<Service>>;
}
