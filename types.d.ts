declare module "bun" {
  interface Env {
    ALGOLIA_APP_ID: string;
    ALGOLIA_SEARCH_API_KEY: string;
    ALGOLIA_INDEX_NAME: string;
  }
}
