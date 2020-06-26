import { Client } from './client';
export class Extinguisher{
    public idFireExtinguisher: number;
    public client: Client = new Client();
    public fireExtinguisherBrand: {
        idBran: number,
        brandName: string
    };
    public fireExtinguishingAgent: string;
    public fireExtinguisherCapacity: number;
    public dateFabrication: Date;
    public loadingDate: string;
    public dateHydraulicTest: Date;
    public barcode: string;
    public certificacionBureauBeritas: boolean;
}