type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";

export interface IOptionsFetch {
  url: string;
  method?: Methods;
  body?: any;
  headers?: any;
}
