
export class Page {
    public itens: any[] = [];
    public actualPage: Number = 0;
    public totalRecords: Number = 0;

}
export class Config {
    public page: Number = 1;
    public pageSize: Number = 10;
    public totalPages: null;
    public orderBy: String = 'id';
    public direction: String = 'desc';
}

export class DatatablePageConfig {
    public page: Page = new Page();
    public config: Config = new Config();
    public filterParameters: any = {};
}
