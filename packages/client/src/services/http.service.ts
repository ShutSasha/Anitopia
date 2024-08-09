import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import $api from '~/config/http'

class HttpService {
  private fetchingService: AxiosInstance
  private apiVersion: string

  constructor(fetchingService: AxiosInstance = $api, apiVersion: string = 'api') {
    this.fetchingService = fetchingService
    this.apiVersion = apiVersion
  }

  private getApiEndpoint(endpoint: string): string {
    return `/${this.apiVersion}/${endpoint}`
  }

  private extractUrlAndDataFromConfig(config: AxiosRequestConfig): Omit<AxiosRequestConfig, 'url' | 'data'> {
    const { data: _data, url: _url, ...configWithoutDataAndUrl } = config
    return configWithoutDataAndUrl
  }

  public get<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.fetchingService.get(this.getApiEndpoint(config.url), this.extractUrlAndDataFromConfig(config))
  }

  public post<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.fetchingService.post<T>(
      this.getApiEndpoint(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config),
    )
  }

  public put<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.fetchingService.put<T>(
      this.getApiEndpoint(config.url),
      config.data,
      this.extractUrlAndDataFromConfig(config),
    )
  }

  public delete<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.fetchingService.delete<T>(this.getApiEndpoint(config.url), this.extractUrlAndDataFromConfig(config))
  }
}

export default HttpService
