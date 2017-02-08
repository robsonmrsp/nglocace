
export class Page {
    public itens: any[] = [];
    public actualPage: Number = 1;
    public totalRecords: Number = 0;

}
export class Config {
    public page: Number = 1;
    public pageSize: Number = 10;
    public totalPages: Number = 1;
    public orderBy: String = 'id';
    public direction: String = 'desc';
}

export class DatatablePageConfig{
    public page: Page = new Page();
    public loading: boolean = false;
    public config: Config = new Config();
    public filterParameters: any;
}
