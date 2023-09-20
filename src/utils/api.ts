import axios from 'axios'
import type { AxiosResponse, AxiosRequestConfig } from 'axios'

const URI = process.env.NEXT_PUBLIC_URI

export const api = axios.create({
  baseURL: URI,
  withCredentials: true,
})

const headers = (token?: string): object => ({
  Authorization: token,
})

const Get = async <T>(
  path: string,
  accessToken: string,
): Promise<AxiosResponse<T>> => {
  return await api.get(path, headers(accessToken))
}

const Post = async <T, P = any>(
  path: string,
  payload: P,
  accessToken: string,
): Promise<AxiosResponse<T>> => {
  return await api.post<AxiosRequestConfig<P>, AxiosResponse<T>>(
    path,
    payload,
    headers(accessToken),
  )
}

const Put = async <T, P = any>(
  path: string,
  payload: P,
  accessToken: string,
): Promise<AxiosResponse<T>> => {
  return await api.post<AxiosRequestConfig<P>, AxiosResponse<T>>(
    path,
    payload,
    headers(accessToken),
  )
}

const Delete = async <T>(
  path: string,
  accessToken: string,
): Promise<AxiosResponse<T>> => {
  return await api.delete(path, headers(accessToken))
}

export default { Get, Post, Put, Delete }
