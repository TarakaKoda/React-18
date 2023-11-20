import apiClient from "./api-client";

interface Entity {
  id: number;
}

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = <T>() => {
    const controller = new AbortController();
    const request = apiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });

    return { request, cancel: () => controller.abort() };
  };

  delete = (id: number) => {
    return apiClient.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  };

  add = <T>(entity: T) => {
    return apiClient.post(
      `https://jsonplaceholder.typicode.com/${this.endpoint}`,
      entity
    );
  };

  update = <T extends Entity>(entity: T) => {
    return apiClient.patch(
      `https://jsonplaceholder.typicode.com/${this.endpoint}/${entity.id}`,
      entity
    );
  };
}

const create = (endpoint: string) => {
  return new HttpService(endpoint);
};

export default create;
