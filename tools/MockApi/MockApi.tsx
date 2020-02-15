class MockApi {
  baseUrl: string = "";
  constructor() {
    this.baseUrl = "http://localhost:3000/";
  }

  Get = () => {};
  GetById = () => {};
}

export default MockApi;
