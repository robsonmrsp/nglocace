
export class Page {
    itens: any[] = [];
    actualPage: Number = 0;
    totalRecords: Number = 0;
}
export class Config {
    page: Number = 1;
    pageSize: Number = 10;
    totalPages: null;
    orderBy: String = 'id';
    direction: String = 'desc';

}

export class PageGeneroComponent {
    page: Page = new Page();
    config: Config = new Config();
}
