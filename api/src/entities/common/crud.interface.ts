export interface CRUD {
    read (limit: number, page: number): Promise<any>;
    add (resource: any): Promise<any>;
    putByUuid (uuid: string, resource: any): Promise<any>;
    readByUuid (uuid: string): Promise<any>;
    deleteByUuid (uuid: string): Promise<any>;
}